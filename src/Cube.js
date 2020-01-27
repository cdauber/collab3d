import React, { Component } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

class Cube extends Component {
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
    scene.fog = new THREE.FogExp2(0xcccccc, 0.002);

    //Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.set(400, 200, 0);
    camera.lookAt(new THREE.Vector3(0, 0, 0)); // Set look at coordinate like this

    //Renderer- Generally always use webGL
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth * 0.7, window.innerHeight * 0.7);

    // controls
    const controls = new OrbitControls(camera, renderer.domElement);

    //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)
    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 100;
    controls.maxDistance = 500;
    controls.maxPolarAngle = Math.PI / 2;

    // world
    const geometry = new THREE.CylinderBufferGeometry(0, 10, 30, 4, 1);
    const material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      flatShading: true
    });

    for (var i = 0; i < 500; i++) {
      var mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = Math.random() * 1600 - 800;
      mesh.position.y = 0;
      mesh.position.z = Math.random() * 1600 - 800;
      mesh.updateMatrix();
      mesh.matrixAutoUpdate = false;
      scene.add(mesh);
    }

    // lights
    var light = new THREE.DirectionalLight(0xffffff);
    light.position.set(1, 1, 1);
    scene.add(light);
    light = new THREE.DirectionalLight(0x002288);
    light.position.set(-1, -1, -1);
    scene.add(light);
    light = new THREE.AmbientLight(0x222222);
    scene.add(light);

    //Bind ThreeJs items to this for use outside componentDidMount
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.material = material;
    this.geometry = geometry;

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

export default Cube;
