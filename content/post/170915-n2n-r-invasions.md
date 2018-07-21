+++
title = "New to nuke: Rook invasions"
date = 2017-09-15T22:21:47+02:00
description = ""

slug = "n2n-r-invasions"
tags = ["n2n", "invasions"]
type = "post"
+++

_This series is for players new to atomic. In this installment we look at how a single rook can be fatally dangerous, and a simple principle to help evaluate the situation._

Only the queen can by herself mate the enemy king. But a rook in the middlegame can be equally devastating if the enemy king is surrounded by his own forces. Once a rook slips into the enemy position unchecked, it usually guarantees at least a perpetual, if not an outright win.

Calculating whether a rook invasion is winning or merely drawing can be complicated, especially if the critical line is long and not every move is a check. However, the good news is that there is a quick trick to spot draws that works most of the time: the 2x2 rule. Before we go into that, we'll look at one simple and vital pattern: a forced mate in 1.


## The mating pattern ##
The following pattern is a forced mate in 1: a rook, the enemy king and an enemy piece all in a line with no spaces in between. This is a check, and the enemy king cannot avoid the explosion next turn (rook takes piece, mate).

<iframe width=800 height=495 frameborder=0 src="https://lichess.org/study/embed/2lC2jkJj/54BTfDt2#1"></iframe>

This simple pattern is important in calculating rook middlegames and endgames.

-----------

## The 2x2 rule ##
Now that we've seen the mating pattern, we see why the squares orthogonally adjacent to pieces are dangerous; squares not adjacent are "safe". Keeping this in mind, we have a rule of thumb to spot draws:

> __If the king reaches a 2x2 safe area, the rook alone cannot win.__

The 2x2 square cannot have friendly (the king's side) pieces adjacent to its sides. The king can then just move around within the square while being checked by the rook.

A diagram should show this more clearly than I can explain in words:

<iframe width=800 height=495 frameborder=0 src="https://lichess.org/study/embed/2lC2jkJj/RulfLTM1"></iframe>

The 2x2 rule gives a sufficient but not necessary condition for safety. In other words, there may be cases where there isn't a 2x2 square yet the king can escape to safety elsewhere anyway. But you can be sure that with a 2x2 square, the opponent will need more than just the rook to win.


## Winning rook invasions ##
Let's look at two examples of winning rook invasions, where the enemy king doesn't have enough space to stay safe - that is, no 2x2 square. The winning method will be to force the king next to its own units and force the mating pattern we saw above.

Calculating an invasion out to mate can take some effort, but fortunately most of the moves are forced, and really tricky cases don't appear in games very often.

<iframe width=800 height=495 frameborder=0 src="https://lichess.org/study/embed/2lC2jkJj/RdgXDc2k"></iframe>

<iframe width=800 height=495 frameborder=0 src="https://lichess.org/study/embed/2lC2jkJj/6UILsj0v"></iframe>

The third position is slightly longer and is given as an exercise for the reader; view it in the original lichess study as an [interactive lesson](https://lichess.org/study/2lC2jkJj/RNJ147Bm). You can also click on the link at the bottom of the diagram. White to play and win.

<iframe width=800 height=495 frameborder=0 src="https://lichess.org/study/embed/2lC2jkJj/RNJ147Bm"></iframe>


## Making luft ##
In regular chess, moving any pawn in front of the king is enough to stop back-rank mates. In atomic, the king needs quite a bit more space against a rook invasion. When you're defending, the 2x2 rule can be extremely useful, allowing you to see the correct defence with almost no calculation. In the following example, the 2x2 rule lets you find the only move to survive very quickly.

<iframe width=800 height=495 frameborder=0 src="https://lichess.org/study/embed/2lC2jkJj/c252d25g"></iframe>

The following position shows an application of the 2x2 rule in an actual game, kreedz-Illion. With 21...Rxg2, black threatened a rook invasion along the g-file. White reacted correctly with 22. h3!, immediately giving the king safety (2x2 square f1, f2, g1, g2). If for example 22. Bxb4? instead, 22...h3! fixes the white pawn on h2, and black will win with ...Rg8 next, invading. (22. f6 and 22. Kf2 are also fine to draw.)

<iframe width=800 height=495 frameborder=0 src="https://lichess.org/embed/zICrtk9p#42"></iframe>

Finally, an exercise: can you find the only defence for white? Again, view it on lichess as an [interactive lesson](https://lichess.org/study/2lC2jkJj/WKgOe2ld).

<iframe width=800 height=495 frameborder=0 src="https://lichess.org/study/embed/2lC2jkJj/WKgOe2ld"></iframe>

-----------

The 2x2 rule is a great tool in rook middlegames and endgames, letting you judge invasions almost at a glance.

Of course, if there isn't a 2x2 square some precise calculation will still be needed to determine if it's still drawn anyway; it's generally simple in practical games though and gets easier with practice, so keep on playing!


_(Fine print: Rekursiv gave the rule of the 2x2 square first in his chapter on tactics, along with more complex practical examples; do check out his PDF. Ask around on the [Atomic Chess Theoreticians forum](http://lichess.org/team/atomic-chess-theoreticians) for a link to it.)_