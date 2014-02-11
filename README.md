Animations v1.0
===============

Easily add a set of predefined CSS3 animations to elements to execute as they enter the viewport or to trigger via JavaScript or mouse hover.

**Demo:** http://www.cloud-eight.com/github/animations/


Usage
=====

<ul>
  <li>Use the IE conditional statements with your `html` tags shown below</li>
  <li>Add the class `no-js` to your `html` tag also</li>
  <li>Link both animations.min.css and animations.min.js to your document</li>
</ul>


Animations
==========

The plugin will auto detect elements in view on page load, any other element assigned with the `animate` class and a `data-anim-type` attribute will be executed as it enters the viewport.

<ul>
  <li>Add the class `animate` to the desired element</li>
  <li>Add the attribute `data-anim-type` with an animation type listed below</li>
  <li>(Optional) Add the attribute `data-anim-delay` if you wish to put a delay (in ms) on the animation</li>
</ul>

```
<div class="animate" data-anim-type="bounceIn" data-anim-delay="200">Bouncy Bouncy</div>
```

| Animation            | Class Name        |
|:--------------------:|:-----------------:|
| Fade In              | fadeIn            |
| Fade In Up           | fadeInUp          |
| Fade In Down         | fadeInDown        |
| Fade In Left         | fadeInLeft        |
| Fade In Right        | fadeInRight       |
| Fade In Up Large     | fadeInUpLarge     |
| Fade In Down Large   | fadeInDownLarge   |
| Fade In Left Large   | fadeInLeftLarge   |
| Fade In Right Large  | fadeInRightLarge  |
| Fade Out             | fadeOut           |
| Fade Out Up          | fadeOutUp         |
| Fade Out Down        | fadeOutDown       |
| Fade Out Left        | fadeOutLeft       |
| Fade Out Right       | fadeOutRight      |
| Fade Out Up Large    | fadeOutUpLarge    |
| Fade Out Down Large  | fadeOutDownLarge  |
| Fade Out Left Large  | fadeOutLeftLarge  |
| Fade Out Right Large | fadeOutRightLarge |
| Zoom In              | zoomIn            |
| Zoom In Up           | zoomInUp          |
| Zoom In Down         | zoomInDown        |
| Zoom In Left         | zoomInLeft        |
| Zoom In Right        | zoomInRight       |
| Zoom In Up Large     | zoomInUpLarge     |
| Zoom In Down Large   | zoomInDownLarge   |
| Zoom In Left Large   | zoomInLeftLarge   |
| Zoom In Right Large  | zoomInrightLarge  |
| Zoom Out             | zoomOut           |
| Zoom Out Up          | zoomOutUp         |
| Zoom Out Down        | zoomOutDown       |
| Zoom Out Left        | zoomOutLeft       |
| Zoom Out Right       | zoomOutRight      |
| Zoom Out Up Large    | zoomOutUpLarge    |
| Zoom Out Down Large  | zoomOutDownLarge  |
| Zoom Out Left Large  | zoomOutLeftLarge  |
| Zoom Out Right Large | zoomOutRightLarge |
| Bounce In            | bounceIn          |
| Bounce In Up         | bounceInUp        |
| Bounce In Down       | bounceInDown      |
| Bounce In Left       | bounceInLeft      |
| Bounce In Right      | bounceInRight     |
| Bounce Out           | bounceOut         |
| Bounce Out Up        | bounceOutUp       |
| Bounce Out Down      | bounceOutDown     |
| Bounce Out Left      | bounceOutLeft     |
| Bounce Out Right     | bounceOutRight    |
| Spin Left            | spinRight         |
| Spin Right           | spinLeft          |


Triggers and Hovers
===================

There are 2 types of predefined trigger functions, 1 that executes the animation once and another which loops continuously.
You can pass 2 variables into these functions and that is the ID/Class of the target element and what type of animation you want to execute.
Multiple elements can be targeted by seperating them with a comma.

```
<button onclick="triggerOnce('#logo', 'wave');">Wave Once</button>
<button onclick="triggerInfinite('#logo, #tagline', 'wave');">Wave Continuously</button>
```

You can also use `onHover*` class to assign the animation to the `:hover` psuedo selector, adding the class `infinite` will continuously loop the animation while hovering.

```
<button class="onHoverSpin">Spin Once</button>
<button class="onHoverSpin infinite">Spin Continuously</button>
```

| Animation  | Triggers | Class Name | Hovers | Class Name       |
|:----------:|:--------:|:----------:|:------:|:----------------:|
| Flash      | Yes      | flash      | Yes    | onHoverFlash     |
| Strobe     | Yes      | strobe     | Yes    | onHoverStrobe    |
| Shake      | Yes      | shake      | Yes    | onHoverShake     |
| Bounce     | Yes      | bounce     | Yes    | onHoverBounce    |
| Tada       | Yes      | tada       | Yes    | onHoverTada      |
| Wave       | Yes      | wave       | Yes    | onHoverWave      |
| Spin       | Yes      | spin       | Yes    | onHoverSpin      |
| Pullback   | Yes      | pullback   | Yes    | onHoverPullback  |
| Wobble     | Yes      | wobble     | Yes    | onHoverWobble    |
| Pulse      | Yes      | pulse      | Yes    | onHoverPulse     |
| Pulsate    | Yes      | pulsate    | Yes    | onHoverPulsate   |
| Heartbeat  | Yes      | heartbeat  | Yes    | onHoverHeartbeat |
| Panic      | Yes      | panic      | Yes    | onHoverPanic     |
| Explode    | Yes      | explode    | No     |                  |
| Random     | Yes      | random     | No     |                  |


Browser Compatibility
=====================

IE 10+
Firefox 25+
Chrome 31+
Safari 7+
Opera 18+
Most mobile browsers


Limitations
===========

Since this uses Digital Fusions' visible plugin, the same limitations apply to this also, in that it will not check for visibility in nested scrollable areas, only on the main viewport (window object).
Animations executing on elements entering the viewport will not work if JavaScript is disabled, it will just display the element normally.
Animations are currently limited to devices with a viewport of 960px (wide) and higher.


Author
======

Joe Mottershaw, Cloud Eight<br />
http://www.cloud-eight.com


Credits
======

Visible.js, TeamDF, Digital Fusion<br />
http://www.teamdf.com
