+++
title = "Pawnitisation breaking"
date = 2017-10-13T22:11:28+02:00
description = ""

slug = "pawnitisation-breaking"
categories = ["blog"]
series = []
tags = ["pawnitisation", "endgames", "pawns", "tactics"]
type = "post"
+++

Last week I discussed the fundamentals of pawnitisation - make your opponent's bishop useless by putting your pawns on the opposite colour. It lets you draw if you're down a bishop, provided all your pawns can't be attacked by the bishop, and there are no passed pawns. Simple.

But of course, chess is rarely that simple. This week we'll be looking at the exceptions - where white can win even when there are no pawn majorities and no targets for the bishop. I'll be going through the two types of exceptions I'm aware of: pawn structure stability, and zugzwang.

I highly recommend reading [last week's post]({{< relref "171006-pawnitisation-bad-b" >}}) to understand the fundamentals if you don't already. Also, I'll be going through the solution to last week's problem at the end of the first part on pawn stability, so skip ahead if you're curious (but come back to read the section please!).


## Pawn stability ##
In last week's problem, it seemed at first glance that black could draw. Black could put all the pawns on the opposite colour from the enemy bishop, and there weren't any passed pawns or pawn majorities on the board. Yet surprisingly, white can force a win - I attribute this to white's pawn structure not being _stable_.

What I mean by stable is a __pawn structure where white can't force a passed pawn against black's will__. Obviously it's something that needs to be considered on a case-by-case basis, but recognising some simple patterns will reduce the thinking needed. Let's consider the structures where each side has two pawns facing off.


### Stable pawns ###
When both sides' pawns are connected, the structure is stable. In the below position, both the structures on the left and right sides of the board are stable. The exchange of any pair of pawns will not result in a passed pawn. As such, white cannot force a passed pawn.

{{< lichess-embed src="https://lichess.org/study/iS3Dp19A/LLAZzQxE" >}}
[//]: # (FEN: 4k3/p5p1/1p5p/8/8/PP3PP1/8/4KB2 w - - 0 1)

The situation gets more interesting if we consider the case where one side has split pawns (2 isolated pawns instead of 2 connected pawns).

With split pawns as shown in the following diagram, stability is possible. Regardless if white has the connected (left) or the split (right) pawns, black can in both cases successfully prevent the creation of passed pawns.

{{< lichess-embed src="https://lichess.org/study/iS3Dp19A/8IPwtxaM" >}}
[//]: # (FEN: 4k3/p1p3p1/7p/8/8/8/PP3P1P/4KB2 w - - 0 1)


### Unstable pawns ###
To help reduce the burden of calculating every possible series of pawn moves just to reach the conclusion that it's stable, I'd like to approach the position in a systematic way. White wants a passed pawn - it makes sense to look for pawns that are _almost_ passed, pawns that would be passed but for one enemy pawn. Those "dangerous" pawns would be a2 and f2.

The black pawns that are stopping them are likewise important - those on a7 and g7. Black does not want these pawns to be exchanged off, which would let the a2/f2 pawns become passed. I'll call them "crux" pawns for ease of reference and for want of a better name. (Do invent and suggest your own labels if it helps or better yet, come up with a personal understanding of pawn structure.)

In the example above, black can draw by keeping the pawns where they are. The crux pawns can't be exchanged off by white - if white tries b6 then black responds with ...cxb6, while if white tries f6 gxf6, only blocked h-pawns are left. So white's dangerous pawns can't become passed.

Let's see why these ideas are useful by looking at an example with unstable pawn structures.

{{< lichess-embed src="https://lichess.org/study/iS3Dp19A/gAEQIi1Y" >}}
[//]: # (FEN: 4k3/2p5/7p/p5p1/8/8/PP3P1P/4KB2 w - - 0 1)

The only changes from the previous position are that the pawns that were on a7/g7 are now on a5/g5 - still dark squares. However, white can now force passed pawns on both wings!

Thinking in terms of dangerous/crux pawns again, we see that the crux pawns have advanced, and are now vulnerable to attack. An immediate 1. b4 forces the trade of black's a-pawn or forces it to advance onto a light square. On the kingside, white now has the other option of 1. h4 to again force an exchange or an advance (while in the previous stable diagram, the pawn on h6 had shielded the one that had been on g7.)

### Solution to last week's problem ###
With all this in mind, we can now examine the problem from last week. White forces a win because the pawns are unstable. I'll slowly explain the solution.

{{< lichess-embed src="https://lichess.org/study/iS3Dp19A/95GBp5HU" >}}
[//]: # (FEN: 1k6/3p3p/2p2pp1/8/8/5P1P/1P1P2P1/2B3K1 w - - 0 1)

Let's try and understand this systematically from the white side. On the queenside, b2 is dangerous and c6 is crux. On the kingside, for any of the white pawns to become passed, g6 must be captured. Assuming that we can capture the g6-pawn, black's f-pawn will need to eventually be advanced to f5 (light square). We want this to then be a vulnerable crux pawn, so we want to take g6 with our h-pawn, then f2 would be "dangerous". We therefore need to stop black playing ...h5 shielding the g6-pawn.

Our first priority is to stop ...h5. Play begins 1. d4 d5 (since the crux on c6 was threatened by 2. d5 c5 3. b3!) 2. Bh6! f5 (it needs to be played sooner or later, better sooner than to let white gain tempo with Bg7 later.)

{{< lichess-embed src="https://lichess.org/study/iS3Dp19A/95GBp5HU#4" >}}
[//]: # (FEN: 1k6/7p/2p3pB/3p1p2/3P4/5P1P/1P4P1/6K1 w - - 0 3)

Let's take stock. The queenside is now stable; on the other hand the kingside is not, since we succesfully restrained the h-pawn. The natural plan - the only plan - is to now push h4-h5 sacrificing the bishop but creating passed pawns. Some calculation will be needed to ensure this pawn endgame is winning. Fortunately, white has all the time needed to prepare this push with b4, f4, g4, h4 and Kh2 before deciding to push. Let's say this is done.

{{< lichess-embed src="https://lichess.org/study/iS3Dp19A/95GBp5HU#15" >}}
[//]: # (FEN: 4k3/7p/2p3pB/3p1p1P/1P1P1PP1/8/7K/8 b - - 0 8)

The push 8. h5! is the culmination of white's plan. Before playing it, we should calculate the mainline - 8. h5 gxh5 9. gxf5 gives up a bishop for a passed pawn, and with white's preparation the race is won - white blockades the black pawn further up the board than black does white's pawn. One thing I'd like to highlight is the move b4: it avoids black playing ...c5 and ...cxd4 after the bishop sac, which would create more passed pawns - complications are not what white wants.

That was the intended solution when I composed the position. However, as composers amateur and experienced alike are wont to find, unintended solutions like rearing their heads from time to time. I found this alternative solution (in problemist parlance, a cook) while drafting the study chapters for this week. If you followed the explanation of the above solution, the second one is in much the same vein so I'll just give the idea. (The full line is given in the study.)

Start with 1. d3 h5 2. Bf4+ Kc8 3. Bd6! (the crux pawn on c6 is permanently exposed and can't be shielded by ...d5) and then prepare the push/sacrifice d4-d5, just as h4-h5 was winning in the intended solution. Again, we see the same pattern of preventing black from shielding the vulnerable crux pawn by using the bishop as a blockader.


## Pawnitisation breaking by zugzwang ##

Now we tackle a more well-known but nevertheless tricky idea, breaking pawnitisation by zugzwang. This method is almost always a last resort, when the opponent has succeeded in achieving a stable pawn structure on the opposite colour from the bishop, but has not yet managed to get the king to the safety of an open space. It is rare to see in games; nevertheless, being aware of the possibility will help you win the unwinnable and save the unsaveable games.

These positions need some imagination and "board vision" to recognise if there's even a win to be found. It's best to just be aware of the idea and several different zugzwang ideas, then hoping that you recognise when one of them presents itself in a real game.

The key to such positions is always a lack of space for the black king. The black king is confined to just a small safe area, and squeezed out of it by using white's bishop and/or king. Before proceeding, I recommend [reading about "mining"]({{< relref "post/170908-mined-squares-danger" >}}) since it helps in identifying which squares are actually safe for the black king - they're not always the ones that look safe.

For our first example, let's take a position where visually the black king is cramped. White wants to force the black king to run of moves so that ...b6 has to be played. Here, the white bishop can do the job. Of note is that 1. Bg5 guards d8, preventing the black king from escaping to the rest of the board for a draw - it's impossible to force a zugzwang in open space.

{{< lichess-embed src="https://lichess.org/study/iS3Dp19A/bocA06Bo" >}}
[//]: # (FEN: 2k5/1p1p4/3P4/1P6/8/8/8/2B1K3 w - - 0 1)

Next up, a position where the white king is in the starring role. This next example contains two important points I want to bring up; have a look at the position first.

{{< lichess-embed src="https://lichess.org/study/iS3Dp19A/7SQPWGGJ" >}}
[//]: # (FEN: 1k6/p3K3/8/1P6/8/8/8/5B2 w - - 0 1)

Firstly, we need to be able to recognise that the black king is trapped in the corner, and can't escape by c7, for instance.

- I like to think of it in terms of mining. If the black king is ever next to b6, then white can push b6 then b7 without black being able to play ...axb6. Therefore, the 3x3 square around b6 is *mined*, or unsafe for the black king.

The second point: the bishop alone cannot force zugzwang here. If we try 1. Bh3 Ka8 2. Bc8 Kb8 3. Bb7? Kc7 4. b6 Kd6, suddenly we realise that we can't push b7 immediately, nor can we stop 5...axb6 drawing.

- The key is to realise that the squares around b6 are mined, as long as white doesn't have a piece on b7. This is an important feature of the position.


Finally, our third example is a touch more complicated, involving both the bishop and the king. I'll give a quick rundown of the solution after the diagram.

{{< lichess-embed src="https://lichess.org/study/iS3Dp19A/Q9Pzmmem" >}}
[//]: # (FEN: 3k4/2p1p3/8/1P3P2/3K4/3B4/8/8 w - - 0 1)

- The threats of b6 and f6 mine almost everything - the black king is restricted to the 8th rank, the d-file and the h-file.
- Black moves towards f8/e8, where white's bishop alone cannot force zugzwang. (Black needs the extra space on the kingside - it doesn't work on the queenside.)
- White stops black's king from leaving by defending g8 with the bishop.
- Meanwhile, the white king marches to g8 to begin boxing the black king back into the pawns.
- Finally, zugzwang is achieved with bishop and king. A some relatively simple calculation is needed.

The hard parts are recognising which squares are safe for the black king, and then seeing that white's king is needed on g8 for the zugzwang. A mental trick like mining helps with the first problem of visualisation; simply being aware of the idea to use the king is sufficient for the second.


## Problems ##
There's already a fair amount of material up to this point. Nevertheless, I still have two more problems for you to test yourself with, in particular on the zugzwang ideas. They aren't simple problems! (_[Solutions now up]({{< relref "post/171020-solutions-pawnitisation-problems" >}}). Did you find them?_)

The first problem you may have seen before - I've posted it around the forums and on [Chess Variants Training](https://chessvariants.training/) before. White to play and win - be careful that the black king doesn't escape!

{{< lichess-embed src="https://lichess.org/study/iS3Dp19A/lwU7iPW3" >}}
[//]: # (FEN: 6kK/4p1p1/6P1/7B/3P4/8/8/8 w - - 0 1)


The second is a new original composition. Again, white to play and win. At first glance, it might not even look like the black king is short of space, but strange things can happen. Be careful though, to win white needs to play accurately for the first few moves.

{{< lichess-embed src="https://lichess.org/study/iS3Dp19A/KskCuNLl" >}}
[//]: # (FEN: k7/3p4/5p2/2B5/4K3/5P2/2P5/8 w - - 0 1)

## Conclusion ##
Pawnitisation can be quite a tricky concept in all its detail, but knowing just the basic idea already goes a long way to playing better in the endgame and middlegame. It's especially useful to know if you're a piece down and are trying to save a draw.

The first post was probably simpler - and if you understand the material there, it's usually enough. This second post covered some odd and rarer exceptions, but you never know if you'll need it! If nothing else, I hope you've discovered something fascinating about atomic endgames.


### Further reading ###

- My [previous post on pawnitisation]({{< relref "171006-pawnitisation-bad-b" >}})
- [Chess Variants Training](https://chessvariants.training/) for atomic tactical training
- Special mention to Rekursiv's endgame pdf which got me interested in studying the endgame. The treatment of pawnitisation there is simpler, but there are more examples. Ask around on the [Atomic Chess Theoreticians group](https://lichess.org/forum/team-atomic-chess-theoreticians/) for a link.