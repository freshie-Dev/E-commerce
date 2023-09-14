// imageRecognition.js
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as knnClassifier from '@tensorflow-models/knn-classifier';

class ImageRecognition {
  constructor() {
    this.mobilenetModel = null;
    this.classifier = knnClassifier.create();
  }

  async loadModel() {
    this.mobilenetModel = await mobilenet.load();
  }

  async recognizeImage(imageElement) {
    const logits = tf.tidy(() => {
      const img = tf.browser.fromPixels(imageElement);
      const infer = this.mobilenetModel.infer(img, 'conv_preds');
      return infer;
    });

    const result = await this.classifier.predictClass(logits);
    logits.dispose();

    return result.label;
  }
}

export default ImageRecognition;
