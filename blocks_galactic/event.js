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

goog.provide('Blockly.Blocks.event');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['event_whenplayerinteracts'] = {
    /**
     * Block for when this sprite clicked.
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit({
        "id": "event_whenplayerinteracts",
        "message0": "When player interacts with me",
        "category": Blockly.Categories.event,
        "extensions": ["colours_event", "shape_hat"]
      });
    }
  
  };

  Blockly.Blocks['event_whenmapstarts'] = {
    /**
     * Block for when flag clicked.
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit({
        "id": "event_whenmapstarts",
        "message0": "When the map starts",
        "category": Blockly.Categories.event,
        "extensions": ["colours_event", "shape_hat"]
      });
    }
  };

  Blockly.Blocks['event_whenbroadcastreceived'] = {
    /**
     * Block for when broadcast received.
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit({
        "id": "event_whenbroadcastreceived",
        "message0": "When I receive message %1",
        "args0": [
          {
            "type": "field_variable",
            "name": "BROADCAST_OPTION",
            "variableTypes": [Blockly.BROADCAST_MESSAGE_VARIABLE_TYPE],
            "variable": "message1"
          }
        ],
        "category": Blockly.Categories.event,
        "extensions": ["colours_event", "shape_hat"]
      });
    }
  };

  Blockly.Blocks['event_broadcast'] = {
    /**
     * Block to send a broadcast.
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit({
        "id": "event_broadcast",
        "message0": "Broadcast message %1",
        "args0": [
          {
            "type": "field_variable",
            "name": "BROADCAST_OPTION",
            "variableTypes":[Blockly.BROADCAST_MESSAGE_VARIABLE_TYPE],
            "variable": "message1"
          }
        ],
        "category": Blockly.Categories.event,
        "extensions": ["colours_event", "shape_statement"]
      });
    }
  };