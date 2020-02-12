import React, { Component } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
class ModelRenderer extends Component {
  constructor(props) {
    super(props);
    this.setCameraPosition = this.setCameraPosition.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    //Bind Upstream click events
    this.props.setCameraPosition(this.setCameraPosition);

    //const width = this.mount.clientWidth;
    //const height = this.mount.clientHeight;

    //Pure ThreeJS code

    //Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xcccccc);

    //Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.set(-2, 0, -3);
    camera.lookAt(new THREE.Vector3(0, 0, 0)); // Set look at coordinate like this

    //Renderer- Generally always use webGL
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.outputEncoding = THREE.sRGBEncoding;
    //renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth * 0.6, window.innerHeight * 0.9);

    // controls
    const controls = new OrbitControls(camera, renderer.domElement);

    //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)

    controls.minDistance = 1;
    controls.maxDistance = 500;
    controls.maxPolarAngle = Math.PI / 2;

    //Import the model
    var loader = new GLTFLoader().setPath("models/gltf/microphone/");
    loader.load(
      "scene.gltf",
      gltf => {
        // called when the resource is loaded
        scene.add(gltf.scene);
      },
      xhr => {
        // called while loading is progressing
        console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
      },
      error => {
        // called when loading has errors
        console.error("An error happened", error);
      }
    );
    //Bind ThreeJs items to this for use outside componentDidMount
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    //Mount
    this.mount.appendChild(this.renderer.domElement);

    //Start Animating
    this.start();
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Update Time");
    return false;
  }

  setCameraPosition(param) {
    console.log("setting position to:" + param);
    this.camera.position.set(...param);
  }
  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId);
  }

  animate() {
    this.renderScene();
    console.log(this.camera.position);
    this.frameId = window.requestAnimationFrame(this.animate);
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <div
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }
}

export default ModelRenderer;
