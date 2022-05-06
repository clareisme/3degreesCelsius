1// P_1_2_2_01
//
// Generative Gestaltung – Creative Coding im Web
// ISBN: 978-3-87439-902-9, First Edition, Hermann Schmidt, Mainz, 2018
// Benedikt Groß, Hartmut Bohnacker, Julia Laub, Claudius Lazzeroni
// with contributions by Joey Lee and Niels Poldervaart
// Copyright 2018
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*
 * KEYS
 * 1-4                 : load different images

 */
'use strict';

var img;
var colors = [];
var sortMode = null;

function preload() {
  loadImage('data/pic1.jpg', setImage);
}

function setup() {
  createCanvas(600, 600);
  noStroke();
}

function draw() {
  var tileCount = floor(width / max(random(-10, 50), 2));
  var rectSize = width / tileCount;
  // print(random);

  img.loadPixels();
  colors = [];

  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      var px = int(gridX * rectSize);
      var py = int(gridY * rectSize);
      var i = (py * img.width + px) * 4;
      var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
      colors.push(c);
    }
  }

  gd.sortColors(colors, sortMode);

  var i = 0;
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      fill(colors[i]);
      rect(gridX * rectSize, gridY * rectSize, rectSize, rectSize);
      i++;
    }
  }
  text('PRESS KEYS 1-4', 10, 590, width);
}

function keyReleased() {

  if (key == '1') loadImage('data/pic1.jpg', setImage);
  if (key == '2') loadImage('data/pic2.jpg', setImage);
  if (key == '3') loadImage('data/pic3.jpg', setImage);
  if (key == '4') loadImage('data/pic4.jpg', setImage);

}

function setImage(loadedImageFile) {
  img = loadedImageFile;
}
