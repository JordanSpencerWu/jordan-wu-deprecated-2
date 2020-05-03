---
author: [Alessandro Cipriani, Maurizio Giri]
date: 2020-05-02
description: Noise Generators, Filters, and Subtractive Synthesis
seo-description: Noise generators, filters, and subtractive synthesis notes.
title: Chapter 3T - NOISE GENERATORS, FILTERS, AND SUBTRACTIVE SYNTHESIS
---

A __filter__ is a signal processing device that acts selectively on some of the frequencies contained in a signal, applying attenuation or boost to them.

The goal of most digital filters is to alter the spectrum of a sound in some way.

__Subtractive synthesis__ was born from the idea that brand-new sounds can be created by modifying, through the use of filters, the amplitude of some of the spectral components of other sounds.

__White noise__ a sound that contains all audible frequencies, whose spectrum is essentially flat the amplitudes of individual frequencies being randomly distributed.

__Pink noise__ similar to white noise, but has a spectrum whose energy drops as frequency rises.

__Band-limited oscillators__ are built so that their component frequencies never rise above half of the sampling rate.

Remember you can only attenuate or boost frequencies that are already present.

The __lowpass filter__ attenuates all of the frequencies above a cutoff frequency.

A __high pass filter__ attenuates all of the frequencies below the cutoff frequency.

A __bandpass filter__ attenuates the frequencies above and below a certain __passband__, defined as a continuous zone of frequencies delimited by upper and lower bounds called its __cutoff frequencies__.  Think in terms of __bandwidth__ and __center frequency__. 

In a __band reject__ filter the term bandwidth refers to a zone of frequencies to be attenuated rather than passed unaltered.

Majority of filter allow you to specify a center frequency plus a resonance factor for the filter.

The __Q factor__ is defined as $Q = center frequency / bandwidth$

The Q factor presents bandwidth in relation to the center frequency. When holding Q steady, bandwidth varies as a function of the center frequency, and it is the ratio between the center frequency and the bandwidth that remains constant.

When working with high Q values, it is also possible to encounter an effect called __ringing__, which is an oscillation produced by __transients__ that remains active after the transients have passed.

The __order__ of the filter defines the curve with which frequencies are attenuated.

In digital filters the frequency region near the cutoff frequency is called the __transition zone__, and it is marked by roll-off attenuation that can be more or less steep depending on the implementation.
