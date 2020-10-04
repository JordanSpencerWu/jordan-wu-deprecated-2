---
author: [Gordon Reid]
date: 2020-09-28
description: From Sample & Hold To Sample-rate Converters (2)
seo-description: From Sample & Hold To Sample-rate Converters (2)
title: From Sample & Hold To Sample-rate Converters (2)
---

there are two major sources of limitation of the digitising process — one related to amplitude, the other to timing.

we cannot sample the voltage of the incoming signal with infinite resolution — there is a limit to the number of ways in which we can chop up the amplitude.

The second limitation in analogue-to-digital conversion concerns the sampling frequency of the system: just as we can not digitise the amplitude with infinite precision, we can not conduct the measurements with infinite speed.

If a signal has a bandwidth of less than F the Nyquist frequency, then 2F samples per second are sufficient to represent that signal fully and unambiguously.

An analogue signal can be reconstructed, without error, from samples taken at equal time intervals, provided that the sampling rate is greater than twice the highest-frequency component in the original signal.

'aliasing' any frequencies above the Nyquist frequency 'fold over' and appear an equal distance below the Nyquist frequency.

Remember: if the sampling rate is greater than twice the highest-frequency component in the original signal, it is sufficient to represent that signal fully and unambiguously.
