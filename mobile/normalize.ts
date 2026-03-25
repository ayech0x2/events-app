import { Dimensions, PixelRatio } from "react-native";

const pixelRatio = PixelRatio.get();
const { height: deviceHeight, width: deviceWidth } = Dimensions.get("window");

function normalize(size: number): number {
  if (pixelRatio >= 2 && pixelRatio < 3) {
    if (deviceWidth < 360) {
      return PixelRatio.roundToNearestPixel(size * 0.95);
    }
    if (deviceHeight < 667) {
      return PixelRatio.roundToNearestPixel(size);
    }
    if (deviceHeight >= 667 && deviceHeight <= 735) {
      return PixelRatio.roundToNearestPixel(size * 1.15);
    }
    return PixelRatio.roundToNearestPixel(size * 1.25);
  }

  if (pixelRatio >= 3 && pixelRatio < 3.5) {
    if (deviceWidth <= 360) {
      return PixelRatio.roundToNearestPixel(size);
    }
    if (deviceHeight < 667) {
      return PixelRatio.roundToNearestPixel(size * 1.15);
    }
    if (deviceHeight >= 667 && deviceHeight <= 735) {
      return PixelRatio.roundToNearestPixel(size * 1.2);
    }
    return PixelRatio.roundToNearestPixel(size * 1.27);
  }

  if (pixelRatio >= 3.5) {
    if (deviceWidth <= 360) {
      return PixelRatio.roundToNearestPixel(size);
    }
    if (deviceHeight < 667) {
      return PixelRatio.roundToNearestPixel(size * 1.2);
    }
    if (deviceHeight >= 667 && deviceHeight <= 735) {
      return PixelRatio.roundToNearestPixel(size * 1.25);
    }
    return PixelRatio.roundToNearestPixel(size * 1.4);
  }

  return size;
}

export default normalize;
