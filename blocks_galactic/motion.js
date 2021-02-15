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

goog.provide('Blockly.Blocks.motion');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['motion_blocking_menu'] = {
    /**
     * Go to drop-down menu.
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit({
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "BLOCK_PLAYER",
            "options": [
              ["block", 'yes'],
              ["do not block", 'no']
            ]
          }
        ],
        "colour": Blockly.Colours.motion.secondary,
        "colourSecondary": Blockly.Colours.motion.secondary,
        "colourTertiary": Blockly.Colours.motion.tertiary,
        "extensions": ["output_string"]
      });
    }
  };

  Blockly.Blocks['motion_setblockplayer'] = {
    /**
     * Block to go to a menu item.
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit({
        "message0": "I %1 the player",
        "args0": [
          {
            "type": "input_value",
            "name": "BLOCK_PLAYER"
          }
        ],
        "category": Blockly.Categories.motion,
        "extensions": ["colours_motion", "shape_statement"]
      });
    }
  };