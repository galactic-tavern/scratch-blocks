/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

goog.provide('Blockly.Blocks.control');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['control_forever'] = {
  /**
   * Block for repeat n times (external number).
   * https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#5eke39
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "control_forever",
      "message0": "Forever",
      "message1": "%1", // Statement
      "message2": "%1", // Icon
      "lastDummyAlign2": "RIGHT",
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "args2": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "repeat.svg",
          "width": 24,
          "height": 24,
          "alt": "*",
          "flip_rtl": true
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_end"]
    });
  }
};

Blockly.Blocks['control_repeat'] = {
    /**
     * Block for repeat n times (external number).
     * https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#so57n9
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit({
        "id": "control_repeat",
        "message0": "Repeat %1 times",
        "message1": "%1", // Statement
        "message2": "%1", // Icon
        "lastDummyAlign2": "RIGHT",
        "args0": [
          {
            "type": "input_value",
            "name": "TIMES"
          }
        ],
        "args1": [
          {
            "type": "input_statement",
            "name": "SUBSTACK"
          }
        ],
        "args2": [
          {
            "type": "field_image",
            "src": Blockly.mainWorkspace.options.pathToMedia + "repeat.svg",
            "width": 24,
            "height": 24,
            "alt": "*",
            "flip_rtl": true
          }
        ],
        "category": Blockly.Categories.control,
        "extensions": ["colours_control", "shape_statement"]
      });
    }
  };

  Blockly.Blocks['control_repeat_until'] = {
    /**
     * Block to repeat until a condition becomes true.
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit({
        "message0": "Repeat until %1",
        "message1": "%1",
        "message2": "%1",
        "lastDummyAlign2": "RIGHT",
        "args0": [
          {
            "type": "input_value",
            "name": "CONDITION",
            "check": "Boolean"
          }
        ],
        "args1": [
          {
            "type": "input_statement",
            "name": "SUBSTACK"
          }
        ],
        "args2": [
          {
            "type": "field_image",
            "src": Blockly.mainWorkspace.options.pathToMedia + "repeat.svg",
            "width": 24,
            "height": 24,
            "alt": "*",
            "flip_rtl": true
          }
        ],
        "category": Blockly.Categories.control,
        "extensions": ["colours_control", "shape_statement"]
      });
    }
  };

  Blockly.Blocks['control_if'] = {
    /**
     * Block for if-then.
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit({
        "type": "control_if",
        "message0": Blockly.Msg.CONTROL_IF,
        "message1": "%1", // Statement
        "args0": [
          {
            "type": "input_value",
            "name": "CONDITION",
            "check": "Boolean"
          }
        ],
        "args1": [
          {
            "type": "input_statement",
            "name": "SUBSTACK"
          }
        ],
        "category": Blockly.Categories.control,
        "extensions": ["colours_control", "shape_statement"]
      });
    }
  };

  Blockly.Blocks['control_if_else'] = {
    /**
     * Block for if-else.
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit({
        "type": "control_if_else",
        "message0": Blockly.Msg.CONTROL_IF,
        "message1": "%1",
        "message2": Blockly.Msg.CONTROL_ELSE,
        "message3": "%1",
        "args0": [
          {
            "type": "input_value",
            "name": "CONDITION",
            "check": "Boolean"
          }
        ],
        "args1": [
          {
            "type": "input_statement",
            "name": "SUBSTACK"
          }
        ],
        "args3": [
          {
            "type": "input_statement",
            "name": "SUBSTACK2"
          }
        ],
        "category": Blockly.Categories.control,
        "extensions": ["colours_control", "shape_statement"]
      });
    }
  };
  

  Blockly.Blocks['control_wait'] = {
    /**
     * Block to wait (pause) stack.
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit({
        "id": "control_wait",
        "message0": "Wait %1 game ticks",
        "args0": [
          {
            "type": "input_value",
            "name": "DURATION"
          }
        ],
        "category": Blockly.Categories.control,
        "extensions": ["colours_control", "shape_statement"]
      });
    }
  };
  
  Blockly.Blocks['control_wait_until'] = {
    /**
     * Block to wait until a condition becomes true.
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit({
        "message0": "Wait until %1",
        "args0": [
          {
            "type": "input_value",
            "name": "CONDITION",
            "check": "Boolean"
          }
        ],
        "category": Blockly.Categories.control,
        "extensions": ["colours_control", "shape_statement"]
      });
    }
  };