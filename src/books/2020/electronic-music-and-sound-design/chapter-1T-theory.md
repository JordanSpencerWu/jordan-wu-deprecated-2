---
author: [Alessandro Cipriani, Maurizio Giri]
date: 2020-04-28
description: Introduction to sound synthesis
seo-description: Introduction to sound synthesis notes.
title: Chapter 1T - THEORY INTRODUCTION TO SOUND SYNTHESIS
---

__Sound synthesis__ means the electronic generation of sound.

__Signal processing__ means the electronic modification of a sound.

Frequency, amplitude and waveform are three basic parameters of sound.

#### Each one of these parameters influences how we perceive sound:

* our ability to distinguish a lower pitch from a higher one, frequency
* our ability to distinguish a loud sound from a soft sound, amplitude
* our ability to distinguish different timbres, waveform

__Frequency__ is the physical parameter that determines the pitch of a sound.

The second key parameter for sound is __amplitude__, which expresses information about variations in sound pressure, and which allows us to distinguish a loud sound from one of weaker intensity.

#### Table relating raw amplitudes, normalized to a maximum value of 1, to amplitudes measured in dB SPL

| Amplitude       | db SPL   |
| ----------------| -------- |
| 1               | 0        |
| 0.5             | -6       |
| 0.25            | -12      |
| 0.125           | -18      |
| 0.1             | -20      |
| 0.01            | -40      |
| 0.001           | -60      |
| 0.0001          | -80      |
| 0               | -inf     |

Note that above 2,000 Hz, if we increase the intensity of a sound while maintaining fixed frequency, we will perceive that the pitch is rising, while below 1,000 Hz, as intensity increases, there will be a perceived drop in the pitch. 

Frequency also influences our perception of its intensity: the sensitivity of the ear to volume decreases at higher frequencies, increases in the midrange, and decreases greatly at low frequencies. __This means that the amplitudes of two sounds must differ, depending on their frequencies, in order to produce the same perceived sensation of intensity.__

The third key parameter of sound from the perceptual point of view is __timbre__.

__oscillator__: an electroacoustic device that can be simulated on the computer, generating signals with specific waveforms.

The __sinusoid__ is both the simplest waveform and the most important one. It is the only waveform that contains a single frequency; all other waveforms are composed of multiple frequencies, and because of this, can be decomposed into a series of sinusoids, each of which contains the energy of a single component frequency.

The four classic waveforms are: __sine wave__, __square wave__, __sawtooth wave__, and __triangle wave__.

Remember that positive amplitudes, greater than zero, correspond to compression of the molecules of the transmission medium, while negative amplitudes correspond to rarefaction.

__bipolar waves__ have both positive and negative portions within their wave cycles.

__unipolar waves__ lie completely above or below the value 0, are often used to modify a parameter of a sound.

A sound cannot switch suddenly from silence to its maximum amplitude. A finite time, however brief, is needed, during which the sound in question can evolve to its new state.

The evolution of the amplitude of a sound can be divided into four basic parts: __Attack__, __Decay__, __Sustain__, __Release__.

The evolution of the amplitude of a sound is called the __envelope__.

__The evolution of transients plays an essential role in the definition of timbre by the listener.__

When fashioning an envelope on the computer, we must be careful to avoid large instantaneous changes in amplitude. Abrupt changes will result in audible clicks within the sound.

A __glissando__ is a sound that continuously varies its frequency over time.

__exponential curve__: $y = a^x$

__logarithmic curve__: $y = log_{a}x$

It is important to note that we hear the "size" of all octave intervals as equal, but that the difference in Hz between two sounds separated by an octave will vary.

The digital recording of sound is called __sampling__, and generates a series of numbers, each of which is a __sample__: a measurement of the amplitude of the analog signal at a given instant. The process of digitization, in order to work correctly, must be performed at regular intervals; the number of amplitude measurements that are made on a regular basis in one second is defined as the __sampling rate__.

An audio file can be monaural mono, stereo or multichannel.

A __monaural__ audio file contains a single sequence of numbers that encode its digital waveform.

A __stereo__ file, on the other hand, contains two digital sequences that can be converted in parallel, one for the left channel, and right channel, each representing one speaker of a pair, or one headphone channel.

A __multichannel__ file contains a variable number of sequences that can be sent to the same number of speakers.

The term __panning__ refers to the placement of sound within the spatial environment created by two or more channels.

The __power__ of a signal is its total energy, measured at the source.

The __intensity__ of a signal which we have generically indicated as a parameter tied to amplitude to this point is the energy transmitted by a sound wave through a given surface area during a given unit of time.

__LEFT CHANNEL__: $Amplitude * \sqrt{1 - X}$

__RIGHT CHANNEL__: $Amplitude * \sqrt{X}$

where center is $X=0.5$, right only is $X=1$, and left only is $X=0$ 
