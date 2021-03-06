+++
title = "Rules of atomic"
date = 2017-08-19T11:14:36+02:00
description = "An explanation of the rules of atomic chess for the beginner."

slug = "atomic-rules"
categories = ["reference"]
tags = ["rules", "beginner"]
type = "timeless"
series = []
+++

Welcome to atomic chess! The variant rules are also explained at [their own page on lichess](https://lichess.org/variant/atomic), but not many people know about that page, and the rules about checks may seem unclear at first. Presented here are all the rules with examples to show you what it all means.

View all the examples and try moving the pieces [directly on lichess](https://lichess.org/study/Y9Aj5y3j/)!

## Goal ##
In atomic chess, you win by checkmating or exploding the enemy king, with your king remaining on the board.

## Captures ##

The most striking feature of atomic chess is the destructive power of captures. When a capture is played:

1. The capturing piece and captured piece die (are removed from the board).
2. Next, imagine a 3x3 square centred on the captured piece. Everything in that square that is not a pawn dies.

This example shows 3 different captures by black depending on white's 5th move, and explains which pieces die in each capture.

{{< lichess-embed src="https://lichess.org/study/Y9Aj5y3j/gIvsi0CZ#4" >}}


Much of the game revolves around winning material (or the enemy king!) with captures while dodging your opponent's threats. In fact, __exploding the enemy king__\* is a fairly common way for the game to end.

This also means that kings cannot capture anything, as they would die in the process. They can't even capture each other!

\*Pedantic note: Phrased more accurately, it would be "capturing a piece next to the enemy king, catching it in the explosion", but "exploding the king" is much easier to say.

### Exception: En passant ###
In the case of en passant, the 3x3 square in step 2 is not centred on the captured pawn, but on the square it bypassed (the square the capturing pawn moved to).

{{< lichess-embed src="https://lichess.org/study/Y9Aj5y3j/VEOjghJD#5" >}}


## Illegal moves ##

The goal in atomic chess is to checkmate or explode the enemy king while keeping your king alive. It is therefore illegal to play a move that explodes your own king, such as capturing a piece next to your king. It is also illegal to play a move that leaves your own king in check, unless you immediately explode the opponent's king.
This second part is tricky, and takes a while to get used to. I remember it as "King explosion \> check".

In this example, black cannot leave the king in check with 9...Qxc7.

{{< lichess-embed src="https://lichess.org/study/Y9Aj5y3j/AVDvSCCW#16" >}}

Whereas in this example, black can ignore the check on his king and win by exploding the enemy king with 4...Bxd2#.

{{< lichess-embed src="https://lichess.org/study/Y9Aj5y3j/DluXatzP#7" >}}


## Adjacent kings ##
Because kings cannot capture anything, they also cannot capture each other. So It is perfectly normal in atomic chess for the kings to be next to each other. Furthermore, while they are adjacent, the kings are immune to checks (since each one can't be captured without exploding the other king, they are not under attack in that sense.) This can make for some very interesting endgames, where the winning method is to explode a piece next to your opponent's king but not next to yours.

{{< lichess-embed src="https://lichess.org/study/Y9Aj5y3j/8gu21f1H#0" >}}


## Castling ##
Castling works the same as in normal chess. You cannot castle while in check, through check, or into check. The king can however safely pass through or reach any square adjacent to the enemy king; adjacent kings nullify checks.

{{< lichess-embed src="https://lichess.org/study/Y9Aj5y3j/tV1rwQvI#0" >}}

---------

To see the rules in action, here's a short example game of atomic.

{{< lichess-embed src="https://lichess.org/study/Y9Aj5y3j/bGNv3Ppy#0" >}}

Those are the rules of atomic chess. Now you won't be surprised anymore by your opponent ignoring check or having adjacent kings, and you're ready to go out and play!