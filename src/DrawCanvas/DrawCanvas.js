import React, { useEffect, useState } from "react";
import "./DrawCanvas.css";
import { useRef } from "react";
import { HotKeys } from "react-hotkeys";
import { compressToEncodedURIComponent } from "lz-string";

function paint(canvas, ctx, value, lineWidth, lineColor) {
  if (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const line of value) {
      const [{ x, y }, ...rest] = line;

      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = lineColor;

      ctx.beginPath();
      ctx.moveTo(x * canvas.width, y * canvas.height);
      for (const { x, y } of rest) {
        ctx.lineTo(x * canvas.width, y * canvas.height);
      }
      ctx.stroke();
    }
  }
}

export function DrawCanvas({
  lineWidth = 3,
  lineColor = "black",
  value,
  onChange,
  ...props
}) {
  value = value || [];
  const ref = useRef();
  const width = 1024;
  const height = 1024;
  const [ctx, setContext] = useState();
  const [isPainting, setPainting] = useState(false);

  useEffect(() => {
    if (!ctx) {
      setContext(ref.current.getContext("2d"));
    }
  }, [ref, ctx]);
  useEffect(() => paint(ref.current, ctx, value, lineWidth, lineColor), [
    ref,
    ctx,
    value,
    lineWidth,
    lineColor
  ]);

  return (
    <HotKeys
      allowChanges
      className="draw-canvas-hotkeys"
      keyMap={{ undo: ["command+z", "ctrl+z", "backspace"], print: ["enter"] }}
      handlers={{
        undo: () => {
          if (isPainting) {
            setPainting(false);
          }
          if (value.length > 0) {
            onChange && onChange(value.slice(0, value.length - 1));
          }
        },
        print: () => console.log(compressToEncodedURIComponent(JSON.stringify(value)))
      }}
    >
      <canvas
        ref={ref}
        className="draw-canvas"
        width={width}
        height={height}
        onMouseDown={({ nativeEvent }) => {
          const { offsetX, offsetY } = nativeEvent;
          setPainting(true);
          onChange && onChange([
            ...value,
            [
              {
                x: offsetX / ref.current.clientWidth,
                y: offsetY / ref.current.clientHeight
              }
            ]
          ]);
        }}
        onMouseMove={({ nativeEvent }) => {
          if (isPainting) {
            const { offsetX, offsetY } = nativeEvent;
            if (value.length > 0) {
              const currLine = value[value.length - 1];
              onChange && onChange([
                ...value.slice(0, value.length - 1),
                [
                  ...currLine,
                  {
                    x: offsetX / ref.current.clientWidth,
                    y: offsetY / ref.current.clientHeight
                  }
                ]
              ]);
            }
          }
        }}
        onMouseUp={() => setPainting(false)}
        {...props}
      />
    </HotKeys>
  );
}
