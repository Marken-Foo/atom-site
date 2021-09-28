+++
title = "Solutions to last week's problems"
date = 2017-10-20T22:03:07+02:00
description = "Did you solve the problems in the previous post? Tricky atomic chess endgame studies featuring pawnitsation."

slug = "solutions-pawnitisation-problems"
categories = ["blog"]
series = []
tags = ["pawnitisation", "endgames", "pawns", "tactics"]
type = "post"
+++

This week is just a quick update with the solution to last week's problems. How well did you do?

The first position wasn't hard insofar as calculations go, but relies more on the ability to see the long winning plan. In particular, one needs to realise that the white king must get out of the corner without letting black out. After seeing that and taking care of a few small tactical details, "the rest is just technique".

{{< lichess-embed src="https://lichess.org/study/iS3Dp19A/hL4PEqyd" >}}
[//]: # (FEN: 6kK/4p1p1/6P1/7B/3P4/8/8/8 w - - 0 1)

-----------

In contrast, the second problem was less open-ended than the first. White needs to act quickly to finish constructing the cage for black's king, and for tactical reasons white's first 4 moves are forced.

Then from move 5 onwards, it just takes some vision (mining or otherwise) to see that black's king is trapped in just the 5 squares a6-a7-a8-b8-c8, and is vulnerable to zugzwang. Seeing how to force said zugzwang is a little harder. (Tip: if you want computer help to check this part of the solution, remove the f-pawns and check the tablebase.)

{{< lichess-embed src="https://lichess.org/study/iS3Dp19A/XXiVYZ87" >}}
[//]: # (FEN: k7/3p4/5p2/2B5/4K3/5P2/2P5/8 w - - 0 1)

-----------

Did you see the winning plan in the first problem? Did you find the precise start to the second problem or see the final zugzwang?

Sorry for the short post this week, but I've been pincered by stuff I need to do and stuff I should be doing. For the next two weeks I'll also be away and may not have time to update, but I might pop out something small midweek if possible.