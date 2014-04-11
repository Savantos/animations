Animations v1.4
===============

A versatile CSS3 animation pack with various usages. Trigger CSS3 animations as elements enter the viewport, as you hover with a mouse or by binding them via JavaScript functions/event listeners.

**Demo:** http://www.cloud-eight.com/github/animations/


Usage
=====

<ul>
  <li>Add the class `no-js` to your `html` tag</li>
  <li>Link 'animations.min.css', 'animations.min.js' and 'visible.min.js' (TeamDF) to your document</li>
  <li>Follow the guides below depending on what aspect of the plugin you wish to use</li>
</ul>


Animations
==========

The plugin will auto detect elements in view on page load, any other element assigned with the `animate` class and a `data-anim-type` attribute will be executed as it enters the viewport upon scrolling.

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

By default, animation duration time/speed is 1 second, if you wish to adjust this duration you can add the class `slow-mo` (2 seconds), `super-slow-mo` (3 seconds), `ultra-slow-mo` (4 seconds) or `hyper-slow-mo` (5 seconds).

```
<div class="animate slow-mo" data-anim-type="bounceIn" data-anim-delay="200">Bouncy Bouncy</div>
<div class="animate super-slow-mo" data-anim-type="bounceIn" data-anim-delay="200">Bouncy Bouncy</div>
<div class="animate ultra-slow-mo" data-anim-type="bounceIn" data-anim-delay="200">Bouncy Bouncy</div>
<div class="animate hyper-slow-mo" data-anim-type="bounceIn" data-anim-delay="200">Bouncy Bouncy</div>
```


Click and Hovers
================

There are 2 types of predefined animated JavaScript functions, 1 that executes the animation once and another which loops continuously/infinitely.
You can pass 2 variables into these functions and that is the ID/Class of the target element and what type of animation you want to execute.
Multiple elements can be targeted by seperating them with a comma.

```
<button onclick="animateOnce('#element', 'wave');">Wave Once</button>
<button onclick="animateInfinite('#element, #tagline', 'wave');">Wave Continuously</button>
```

To stop an element from animating you can use the `animateEnd` function and passing the element ID/Class.

```
<button onclick="animateEnd('#element');">End Wave</button>
```

You can also use the `hover-*` class to assign the animation to the `:hover` psuedo selector, adding the class `infinite` will continuously loop the animation while hovering.

```
<button class="hover-spin">Spin Once</button>
<button class="hover-spin infinite">Spin Continuously</button>
```

| Animation  | Click | Class Name | Hover | Class Name      |
|:----------:|:-----:|:----------:|:-----:|:---------------:|
| Flash      | Yes   | flash      | Yes   | hover-flash     |
| Strobe     | Yes   | strobe     | Yes   | hover-strobe    |
| Shake      | Yes   | shake      | Yes   | hover-shake     |
| Bounce     | Yes   | bounce     | Yes   | hover-bounce    |
| Tada       | Yes   | tada       | Yes   | hover-tada      |
| Wave       | Yes   | wave       | Yes   | hover-wave      |
| Spin       | Yes   | spin       | Yes   | hover-spin      |
| Pullback   | Yes   | pullback   | Yes   | hover-pullback  |
| Wobble     | Yes   | wobble     | Yes   | hover-wobble    |
| Pulse      | Yes   | pulse      | Yes   | hover-pulse     |
| Pulsate    | Yes   | pulsate    | Yes   | hover-pulsate   |
| Heartbeat  | Yes   | heartbeat  | Yes   | hover-heartbeat |
| Panic      | Yes   | panic      | Yes   | hover-panic     |
| Random     | Yes   | random     | No    |                 |


Browser Compatibility
=====================

<ul>
  <li>IE 10+</li>
  <li>Firefox 25+</li>
  <li>Chrome 31+</li>
  <li>Safari 7+</li>
  <li>Opera 18+</li>
  <li>Most mobile browsers</li>
</ul>


Limitations
===========

Since this uses Digital Fusions' visible plugin to animate elements as they enter the viewport, the same limitations apply to this plugin also, in that it will not check for visibility in nested scrollable areas, only on the main viewport (window object).
Animations executing on elements entering the viewport will not work if JavaScript is disabled.
Animations are currently limited to devices with a viewport of 960px (wide) and higher.


Author
======

Joe Mottershaw, Cloud Eight<br />
http://www.cloud-eight.com


Credits
======

Visible.js, TeamDF, Digital Fusion<br />
http://www.teamdf.com