export default function createP5Main (width, height, props) {
  return function p5Main ($p5) {
    $p5.props = props
    $p5.setup = () => {
      $p5.createCanvas(width, height)
      $p5.background(0, 0, 0)
    }
    $p5.draw = () => {

    }
  }
} 