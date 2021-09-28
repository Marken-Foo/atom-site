+++
title = "Pawnitisation - the bad bishop"
date = 2017-10-06T21:59:27+02:00
lastmod = 2019-08-08T12:30:45+08:00
description = "The basics of pawnitisation, a drawing technique in atomic chess endgames while down a whole bishop."

slug = "pawnitisation-bad-b"
categories = ["blog"]
series = []
tags = ["pawnitisation", "endgames"]
type = "post"
+++
[//]: # (Welcome to behind the scenes)

Only half the chessboard is ever available to a bishop, the other half forever off-limits. The poor bishop vacillates between its allowed squares, while the enemy pieces taunt it, safely out of reach on the opposite-coloured squares. It is free, unopposed, but with no purpose or function.

When you're up just a bishop that has literally nothing to attack, its existence is almost irrelevant to the position.


## What is "pawnitisation"? ##
Pawnitisation is an endgame defence against such a bad bishop. It lets you draw sometimes when you're a whole bishop down in the endgame. It plays off the fact that a bishop is tied to one colour of squares, and cannot attack pawns which are on squares of the opposite colour. If you can ensure a stable pawn structure where your opponent's bishop can't attack anything, you can still hold a draw. (By "stable pawn structure", I mean one where the opponent cannot forcibly create a passed pawn or pawn majority. We'll see later why this is important.)

This is the analogue of the "bad bishop" in regular chess - a bishop that can't attack your opponent's pawns is useless. In atomic chess, we say that the stronger side has been "pawnitised" by the weaker side. (Terminology by siggemannen, according to Rekursiv. The term is now commonly used.)

To simplify the presentation, let's agree that white is the side up a bishop, and that the only units on the board are the kings, an equal number of pawns for each side, and the white bishop. White is trying to win, usually by sacrificing the bishop then promoting a pawn. Black is trying to draw. In general, Black can draw by pawnitisation if:

- All black's pawns are on squares of the opposite colour from the bishop
- White has no passed pawns, nor can white forcibly create a passed pawn
- No strange exceptions (notably zugzwang; we'll discuss this in [a later post]({{< relref "171013-pawnitisation-breaking.md" >}}))


## Basic pawnitisation ##
The basic idea of pawnitisation is to render white's extra bishop useless by putting all your pawns on the opposite colour. The situation will then be essentially a drawn equal pawn endgame. (Hopefully.) Black will just oscillate the king, while the white bishop can literally do nothing useful. Let's look at a basic example:

{{< lichess-embed src="https://lichess.org/study/iS3Dp19A/jJqZwOa7" >}}
[FEN: 4k3/8/B7/8/3p1p2/3P4/6P1/K7 w - - 0 1]

The position is drawn. Black just takes the white g-pawn whenever it pushes, e.g. **1. Bb5+ Kd8 2. Bd7 Ke7 3. Be6 Kd8 4. g4 fxg3!=** The white bishop is useless.

Note also that if white could magically trade his bishop for the f-pawn somehow, the resulting endgame is a simple win a pawn up (promote to a queen and win using KQP v KP technique.) This is why it's important to keep the pawns safe from the bishop.

Strong players are usually aware of pawnitisation. For instance, in [fast-tsunami vs Gannet](https://lichess.org/z8fOFlpY#62), **31...Rxd2** was played to eliminate white's bishop pair, and both players immediately agreed to a draw.

{{< lichess-embed src="https://lichess.org/z8fOFlpY#62" >}}
[FEN: 8/p4B1k/1p1p4/4p3/3PP3/8/PP5K/8 w - - 0 32]

In [pashpash - moustruito](https://lichess.org/vATgM1r4#44), we see after **22. Rxf8 f5!**, black has more or less pawnitised white. There followed **23. Bf6 b5 24. d4** when **24...d5!** safely fixes the pawn structure for good, and the players agreed to a draw soon after.

{{< lichess-embed src="https://lichess.org/vATgM1r4#44" >}}
[FEN: 8/1p1p3k/4p1p1/5p1p/pP6/4P3/PB1P1PPP/6K1 w - - 0 23]


## Passed pawns don't draw ##
For black, it is vital that there are no passed pawns or pawn majorities. If white (the side with a bishop) can force a passed pawn, they will win. The reasoning is as follows.

Since both sides have equal numbers of pawns, both sides will get passed pawns. Each passed pawn ties down a piece to stop it. However, white has two pieces (king and bishop) while black has only one (king). After the passed pawns are blocked, white will still have a free piece and infinite waiting moves, while black will eventually be forced to move the king and allow white to promote.
Perhaps the following example is clearer. Black's pawns are all on the opposite colour from white's bishop, yet white wins because of the queenside pawn majority.

{{< lichess-embed src="https://lichess.org/study/iS3Dp19A/F4FkvVyw" >}}
[FEN: 4k3/B7/p1p5/7p/6p1/P1P3P1/1P6/2K5 w - - 0 1]

The next example is taken from an actual game, bad3crazy-Illion. (*Note: in this example it's black who has the bishop.)

Instead of a pawn majority, the key feature is the square of pawns d4/e4/d5/e5 in the centre of the board which guarantees black a passed pawn (with the help of the bishop.) This means that black can safely play ...Nxc2 and play for a win without fear of pawnitisation.

{{< lichess-embed src="https://lichess.org/study/iS3Dp19A/FK5xfvmk" >}}
[FEN: r3k3/8/p4p1p/1p1pp3/1n1PPP2/P5P1/1PP1b3/RNB1K3 b Qq - 0 15]

Notice the technique used to win the position with passed pawns - use the extra piece for infinite tempi, promote the pawn, then win with KQP v KP or KQ v KP technique.


## Achieving or avoiding pawnitisation ##
As black (the side without the bishop) it's essential to know about pawnitisation to try and save the game; as white, it's important to be aware of the idea so as to prevent black from achieving it.

We'll now consider two common themes in the endgame that can make or break the defence: fixing pawns and skewering pawns.

_Fixing pawns_ is as simple as it sounds. If white can force a black pawn to remain on the bishop's colour forever, there's no hope for pawnitisation. If black can get all the pawns off the bishop's colour, there's a chance for a draw. Sometimes though, the order in which the pawns are pushed is crucial.

{{< lichess-embed src="https://lichess.org/study/iS3Dp19A/z4dXlOW9" >}}
[FEN: 4k3/8/1p1p4/8/8/P2P4/8/2B1K3 w - - 0 1]

_Skewering pawns_ is also easy. White guarantees the exchange of the bishop for a pawn by attacking two pawns at once by a skewer (or by pinning a pawn to the enemy king.) The important thing to remember is that as white, you want to exchange the bishop off before it becomes useless.

{{< lichess-embed src="https://lichess.org/study/iS3Dp19A/37ZbsXf9" >}}
[FEN: 7k/5p2/4p3/p7/P7/4P1P1/6B1/6K1 w - - 0 1]

-----------

If you're down a piece or a pawn but your opponent has a bishop, remember that you can still hope for a draw in an endgame with pawnitisation.

Those are the basics of pawnitisation. In the next post, we'll look at slightly more involved examples and the "strange exceptions" - positions where breaking pawnitisation is possible!


And lastly, for readers who haven't felt sufficiently challenged by the material in the post, I've prepared the following position, which features ideas not presented above. White to play; does black hold, or can white somehow win?

{{< fen-diag caption="White to move. Can white win?" fen="1k6/3p3p/2p2pp1/8/8/5P1P/1P1P2P1/2B3K1 w - - 0 1">}}

Until next time!