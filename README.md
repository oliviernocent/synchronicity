# Synchronicity

This app computes time when two beats with different <em>bpm</em> get synchronized.

## How does it work?

Given a number of *beats per minute*, one can compute the time interval between
two ticks expressed in samples (fraction of a second) according to the sampling frequency.

```
interval = frequency * 60 / bpm
```

The time interval when two beats get synchronized again is the
[Least Common Multiplier](https://en.wikipedia.org/wiki/Least_common_multiple)
(lcm)
of the two input intervals. This computation can be a bit tricky since it relies on the prime factorization
of the two input integers. Fortunately, the lcm is closely related to the
[Greatest Common Divisor](https://en.wikipedia.org/wiki/Greatest_common_divisor)
(gcd).

```
lcm(a,b) = a * b / gcd(a,b)
```

*What the heck!* The computation of the gcd also relies on the prime factorization of the two
input integers. But, thanks to the [Euclidean algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm), there is a
much more efficient way to compute the gcd using this equation : 

```
gcd(a,b) = gcd(b,a mod b) and gcd(a,0) = a
```

Finally, the time expressed in seconds can be retrieved by dividing the sample count by the 
sampling frequency. 

```
time = interval / frequency
```

**That's all folks!**

---

Try the live [demo](https://oliviernocent.github.io/synchronicity/).
