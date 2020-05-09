---
author: [Nathan Nyquist]
date: 2020-05-09
description: A great book to show you techniques on how to use a mutli-band compressor and what to think about when adjusting the parameters.
seo-description: Mastering multi-band compression by Nathan Nyquist notes.
title: MASTERING MULTI-BAND COMPRESSION
---

A multiband compressor is really just an EQ that has a regular single-band compressor attached to each EQ band.

Compression is just a way for us to control volume.

I want compression for you to mean an Automatic Volume Fader.

##### The 3 Truths About Compression

1. A compressor is just an automatic volume fader, controls for this is threshold, ratio, attack, and release.
2. Anything a compressor can do, volume automation can do.
3. Compressors make loud sounds quieter.

You can look at a multiband compressor as a dynamic EQ, where dynamic means differences in volume.

In an EQ you have separate frequency bands that you can boost or cut. Boosting or cutting is exactly like moving a volume fader up or down for a given frequency band. However with an EQ the volume fader is static.

In a multiband compressor that same volume fader can automatically move up and down in response to the loudness of the incoming signal.

Dynamic EQing = Multiband Compression

An EQ is a static adjustment to the shape of the sound.

In order for a multiband compressor to act dynamically, the signal going into it must also be dynamic.

##### Frequency Band

A multiband compressor allows you to independently select and treat frequency ranges with compression.

##### Blend/Contrast Theory

All you need to do is decide if an instrument is blending or contrasting.

Make sure there's 1 instrument that's louder __contrasting__, and the rest are just supporting __blending__.

Blend/contrast is a universal art.

Front = Contrast

Back = Blend

##### 2 main results Multiband Compression can achieve:

1. Transient Control - means shaping the peak volume
  * Transient Enhancement will always = More Contrast
  * Transient Reduction will always = More Blend
2. Volume Leveling - reducing the difference between loud and quiet portions so it stays in place and not moving front or back

Multiband compressing at the individual track or group level is actaully what gives you the most control over your entire mix, and it leads to the best mixes.

Remember the rule to do cutting based EQ decision before compressing.

#### Techniques

##### Transient Enhancement of Plucky Sounds

1. Set a Frequency Band from 1khz - 20khz on the desired instrument
2. Set Attack 20ms
3. Set Release 20ms
4. Set Ratio 2:1
5. Set Makeup Gain +6db
6. Bring Threshold down until you get 4 - 6db of reduction

##### Transient Reduction of Plucky Sounds

1. Set a Frequency Band from 1khz - 20khz on the desired instrument
2. Set Attack 0ms
3. Set Release 20ms
4. Set Ratio 2:1
5. Bring Threshold down until the transient disappears just a little more than nescessary
6. Set attack 2 - 10ms to get back some transient information

##### Controlling Sweeping Resonant Peaks

1. Play an instrument with a sweeping and very resonant filter. You'll see the resonant peak sweeping across the frequency spectrum on the spectrum analyzer. As it sweeps notice where it begins to stick out in your mix. Wherever it starts and wherever it ends will be the boundaries of your compression band. Usually 800hz - 7khz.
2. Set Attack 20ms
3. Set Release 20ms
4. Set Ratio 2:1
5. Bring Threshold down until you get enough gain reduction to prevent the offending resonant frequency range from poking out in your mix

##### Controlling Frequency Peaks at the Group/Bus Level

1. Put the Multiband Compressor on the group
2. Set just one Frequency Band at 800hz - 5khz
3. Set Attack to 10ms
4. Set Release to 20 - 30ms
5. Set Ratio to 2:1
6. As the entire mix plays, bring the Threshold down until it catches the specific parts where the volume builds up in that frequency range and swamps your lead instrument

##### Shaping Snare Body

1. Set a Frequency Band 100hz - 300hz, or just so the frequency band is center on the snare bump you see on a spectrum analyzer.
2. Set the Attack to 30ms
3. Set the Release to 30ms
4. Set the Ratio to 2:1
5. Add Makeup Gain until you get the fullness and body you want
6. Now bring the Threshold down until you like the body shape you've got

##### Shaping Snare Snap

1. Set a Frequency Band to between 5khz - 20khz
2. Set Attack to 15ms
3. Set Release to 20ms
4. Set Ratio 4:1
5. Add 2 - 4db of makeup gain, just like you're EQ boosting the high frequency content of the sound.
6. Bring the Threshold down until you get 2 - 4db of compression

##### Adding Kick Punch

1. Set a Frequency Band 80hz - 120hz
2. Set Attack 20ms
3. Set Release 30ms
4. Set Ratio 2:1 or 4:1 depending on the desired aggressiveness of the effect
5. Add 1 - 6db Makeup Gain depending on how much punch you'd like to have
6. Bring the Threshold down until you get the sound you want or you've got 1 - 6db of gain reduction

##### Removing Kick Woofiness

1. Set Frequency Band somewhere between 150hz - 800hz
  * You can find the problem frequencies faster by bringing the makeup gain of that band down -6db and then sliding the band left to right until you get the biggest improvement. Reset the gain to 0 when you've found your range.
2. Set Attack to 15ms
3. Set Release to 20ms
4. Set Ratio 2:1
5. Bring the Threshold down until you get whatever amount of gain reduction makes your kick sound the best

##### Strengthening the Bod of a Sound

1. Set Frequency Band to 120hz - 600hz
2. Set Attack 20ms
3. Set Release 30ms
4. Set Ratio 2:1
5. Add 1 - 4db of Makeup Gain
6. Now bring the Threshold down until you get about 2 - 3db of gain reduction

##### Compressing Sub Frequencies for More Power usually on master channel

1. Set a Frequency Band from 0hz - 150hz
2. Set Attack to 30ms
3. Set Release to 30ms
4. Set Ratio 2:1
5. Bring Threshold down until it only triggers 1 - 3db of compression when your kick and bass hit at the same time before

##### Multiband Compressing for Increased Front/Back Depth for supprting instruments

All we need to do is multiband compress whichever frequency ranges of our supporting instruments get most in the way of our leads.

1. Set the Frequency Band to 800hz - 5khz
2. Set Attack 10ms
3. Set Release 30ms
4. Set Ratio 2:1
5. Bring your Threshold down until you get .5 - 2db of gain reduction

##### Multiband Compressing Reverb for Increased Front/Back Depth

This technique is about sending all your reverb sends in a mix to the same group and then on that group you have a multiband compressor.

1. Route all your Reverbs to the same group/bus
2. Add Multiband Compressor to the Reverb group
3. Set the Frequency Band 1khz - 5khz this is the main area for leads and important stuff in your mix
4. Set Attack 30ms
5. Set Release 60 - 100ms
6. Set Ratio 2:1
7. While the entire track is playing during a busy part bring the Threshold down until you get .5 - 2db of gain reduction

##### Sidechain Multiband Compression for Increased Kick Punch

This technique works when you have all your bass instruments coming into a group where you can put a multiband compressor on it.

1. Set Low Frequency Band from 0hz - 150hz
2. Set Attack 0ms
3. Set Release 40ms
4. Set Ratio 2:1
5. As your entire mix is playing, bring down the Threshold of your compressor until you feel you've opened just enough space for your kick to punch through more cleanly

##### Sidechain Multiband Compresion for Improved Lead Clarity

1. Add a Multiband Compressor to the supporting instrument group
2. Set a Frequency Band on the supporting instrument group. The range of the frequency band will be across the main frequency region of your lead usually 1khz - 8khz
3. Route the lead to the Sidechain of the multiband compressor
4. Set Attack 10ms
5. Set Release 30 - 60ms
6. Set Ratio 2:1
7. As everything plays, bring your Threshold down until you get some gain reduction and a pleasant kind of ducking of just that frequency range in the supporting instruments

##### Vocal De-Essing

1. Setup a Frequency Band from 3khz - 7khz. Everyone's a bit different so you'll have to sweep the band in solo to find the epicenter of a person's sibilance
2. Set Attack 10ms
3. Set Release 15ms
4. Set Ratio 2:1
5. Bring Threshold down until compression is only being triggered by the sibilance of the performer. It''s ok if it triggers slightly on other sounds too. You just want it triggering more on the S because that's where you've set it up

##### Broadcast Vocals

Bass Band: From 0 - 150hz

Midrange Band: From 600hz - 5khz

Presence and Clarity Band: From 8khz - 

Getting smooth broadcast vocals by boosting of the <150hz frequencies, a reducing in the 800hz - 5khz range to allow for more volume without harshness and a compression of 8khz+ to soften the pseudo-sibilance that's happening.

###### Bass Band:

1. Set Frequency Range from 0hz - 150hz
2. Set Attack 25ms
3. Set Release 30ms
4. Set Ratio 2:1
5. Start adding 1 - 5db of Makeup Gain
6. Bring down the Threshold to catch any of the already loud portions of your vocals bass frequencies

###### Midrange Band:

1. Set Frequency Range from 800hz - 5khz
2. Set Attack 15ms
3. Set Release 30ms
4. Set Ratio 2:1
5. While listening to the voice, bring down the Threshold until it sounds smoother and less in your face nasally.

###### Presence and Clarity Band:

1. Set Frequency Range from 5khz - 20khz
2. Set Attack 15ms
3. Set Release 20ms
4. Set Ratio 2:1
5. Bring Threshold down until you get .5 - 2db of gain reduction

##### Peak Control on Master Channel

4-Zone Mix Theory

1. Bass: 0hz - 150hz
2. Body: 150hz - 800hz
3. Presence: 800hz - 7khz
4. Detail and Sizzle: 7khz - 20khz

###### Bass:

1. Set Frequency Range from 0 - 150hz
2. Set Attack 25ms
3. Set Release 30ms
4. Set Ratio 2:1
5. Bring Threshold down until you have 1 - 3db of gain reduction

###### Body if you need peak control:

1. Set Frequency Range from 150hz - 800hz
2. Set Attack 20ms
3. Set Release 20ms
4. Set Ratio 2:1
5. Bring Threshold down until any peaks get reduced to a level you like

###### Presence:

1. Set Frequency Range from 800hz - 5khz
2. Set Attack 15ms
3. Set Release 15ms
4. Set Ratio 2:1
5. Bring Threshold down until the transients of your kick and snare start to trigger compression. You want about 1 - 3db of gain reduction

###### Detail and Sizzle:

1. Set Frequency Range from 7khz - 20khz
2. Set Attack 5 - 10ms
3. Set Release 5 - 10ms
4. Set Ratio 2:1
5. Bring Threshold down until you get .5 - 2db of gain reduction