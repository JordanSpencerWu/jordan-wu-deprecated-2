---
author: [Alessandro Cipriani, Maurizio Giri]
date: 2020-04-28
description: A great book that teaches you all the components and algorithms used to create a software synthesizer.
seo-description: Electronic Music and Sound Design by Alessandro Cipriani and Maurizio Giri notes.
title: Electronic Music and Sound Design - Theory and Practice with Max 7 Volume 1
---

#### LIST OF PRINCIPLE COMMANDS

##### Open a new Max document

<Command-n/Control-n>

##### Switch between edit mode and performance mode

<Command-e/Control-e>

##### View the Max Console

<Command-m/Control-m>

##### Cancel an in-progress patch cord when "Segmented Patch Chords" is selected

<Command-click/Control-click>

##### Align the objects in a patcher window
Select + <Command-y/Control-Shift-a>

##### Open the inspector for an object
Select + <Command-i/Control-i>

##### Make floating yellow hints appear when you pass the mouse over an object
Hints are entered via the inspector: in the Hint attribute of the inspector, enter hint text

##### Make annotations appear in the Clue Window when you pass the mouse over an object
Annotations are entered via the inspector: in the Annotation attribute of the inspector, enter annotation text

##### Copy objects or groups of objects from one patcher to another
Select + <Command-c/Control-c> + click on second patcher + <Command-v/Control-v>

##### Select multiple patch cords at once
<Alt-drag> across patch cords to be selected

##### Copy an object
Holding the <Alt> key down, click on an object and drag the "tear-off" copy to a new location

##### Select and copy a group of objects
<Alt-drag> across the group to select it + restrike <Alt> and drag, "tearing off" new copies

##### Select an audio driver
Options -> Audio Status

##### Turn on segmented patch cords
Options -> Segmented Patch Cords
Every click creates a new segment, with the final click falling on the inlet to be connected

##### Create new objects with the press of a key

Within a patcher:

```
n = new object box
b = new button
t = new toggle
i = new integer number box
f = new float number box
m = new message box
c = new comment box
```

##### Open the help patch for a single object
In edit mode, Alt-click on an object

##### Open a File Browser
<Command-b/Control-b>

##### Hide or unhide an object or a patch cord when it is in performance mode
In edit mode, select objects by clicking or using <Alt-click> + <Command-k/Control-k> to hide, or <Command-l/Control-l> to unhide selected objects
