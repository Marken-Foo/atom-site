+++
title = "A knight & bishop mating invasion"
date = 2017-09-22T22:33:46+02:00
description = "A surprisingly common coordinated attack with knight and bishop in atomic chess."

slug = "n-b-mating-invasion"
categories = ["blog"]
series = []
tags = ["patterns", "tactics", "invasions"]
type = "post"
+++

Bishop and knight normally coordinate poorly in chess. They trip around each other awkwardly, the bishop only controlling squares of one colour, while the fickle knight hops between light and dark squares with each move.

Yet in atomic chess, they can combine harmoniously in a particular tactical sequence that crops up now and then. The knight and bishop invade the opponent's camp to catch the king in a forced mate. Despite the specific circumstances needed for this tactic, the sequence felt common enough that I decided to share it with you. One odd thing: I have the impression that white falls victim to this trap more often than black.
The first example shows the tactic in its simplest and clearest form.


## The tactic in its natural habitat ##
As white, I prefer a less popular interpretation of 1. Nf3 f6 2. e3 d5; I continue 3. Bd3 with the idea Nd4 after. You can see the line and more analysis in [my lichess study on the opening](https://lichess.org/study/Dc345Be0).

For our purposes here, I'd like to show a game in the following line: 1. Nf3 f6 2. e3 d5 3. Bd3 g6 4. Nd4 Bg4 5. f3 Nc6. At this point, 6. Nb5?! is a trick I throw in once in a while that isn't totally sound. Black logically continued 6...Nb4, then I blundered instantly with 7. c3?? :

{{< lichess-embed src="https://lichess.org/XE5ZpZnz#13" >}}
[//]: # (FEN: r2qkbnr/ppp1p2p/5pp1/1N1p4/1n4b1/2PBPP2/PP1P2PP/RNBQK2R b KQkq - 0 7)

And here the winning tactical sequence appears: 7...Nc2+ 8. Kf1 Ne1 9. g3 Bh3+ 10. Kg1 Bg2 and mate next. The two minor pieces get right into white's position and make the king suffocate among his own pieces. Having seen this too many times before (but not enough to avoid walking right into it!) I resigned after 9. g3.

As you probably realise, this tactic requires a rather specific set of conditions to be met: white's king is forcibly kicked to f1, h3 isn't protected by a piece, the h2-pawn and h1-rook are still at home, white can't play g4 (it would prevent ...Bh3+), and black gets a knight to e1 and the bishop to h3. Despite the very specific requirements, it turns out that this sequence isn't just a trick that exists in on single opening line, but a tactic that can arise in middlegames too.


## The tactic in the wild ##
Now for a completely different setting: I tossed out a somewhat dubious line to reach an interesting position out of the opening, nothing to do with the line above. (1. Nh3 f6 is probably bad for black, but the refutation I'm aware of is specific, long and "only" gets a massive positional advantage.) Quite a few moves after we both left book, this position arose:

{{< lichess-embed src="https://lichess.org/XFlECLzg/black#25" >}}
[//]: # (FEN: r2qkb2/p7/5pp1/1p1pp3/P4Pb1/2P1PQ2/1P1P1nPP/R1B1K2R b KQq - 4 13)

White's position has been unfortunate for a while (10. Bxc6 was too slow), but after 13. Qf3 black now has the same mating sequence that we saw earlier. This time I didn't drop the ball:
13...Nd3+ 14. Kf1 Ne1 15. g3 Bh3+ 16. Kg1 Bg2+ and white resigned.


## Almost the tactic in 1/2 + 0 ##
Even in a hyperbullet game (!) this pattern was executed to the same finish, but this time one of the conditions wasn't met.

{{< lichess-embed src="https://lichess.org/fRardk5d#21" >}}
[//]: # (FEN: r1b1kb1r/pp3ppp/2p2n2/1B1pp3/4P3/2PP1P2/PPn3PP/R1BQ1K1R b kq - 0 11)

White has just played 11. e4, claiming the centre. Now the game continued 11...Ne1+ 12. g3 Bh3+ 13. Kg1 Bg2 and white resigned, exactly as in the other examples. So what's different?

The missing element was that white could've played 12. g4!, preventing ...Bh3 with an unclear position. It's hyperbullet so we shouldn't be looking too deeply into this, but I find it curious that the same tactic can manifest from such different situations.


## The tactic prevented ##
Let's return to the line from the first game. After 6. Nb5 Nb4, white is facing drastic material loss from ...Nxc2, and as we've seen 7. c3?? loses to our minor piece tactic (7...Nc2+ 8. Qxc2 doesn't help white.)

So instead, throwing in 7. Bf5 is white's best shot, threatening Bd7+ while also defending h3. If black tries to go for the same tactic after 7. Bf5 e6 8. c3 Nc2+ 9. Kf1 Ne1 10. g3 Bh3+, we see that white's bishop now covers this threat, and after 11. Bxh3 white is better, like in the following game:

{{< lichess-embed src="https://lichess.org/vDs7yOrA#12" >}}
[//]: # (FEN: r2qkbnr/ppp1p2p/5pp1/1N1p4/1n4b1/3BPP2/PPPP2PP/RNBQK2R w KQkq - 3 7)

-----------

This B+N tactic is rare since it requires multiple factors to fall into place, but despite the fragile setup it still does occur from time to time. Do keep an eye out for this in your own games.

Looking at it from a broader perspective, this tactic combines several basic concepts: piece invasions (a practical difficulty for the defender to play around) and weak squares (in the examples above, c2/d3 and h3 were weak and allowed the piece invasions). Part of playing good atomic chess is like normal chess: be sensitive to these positional or long-term weaknesses, and play accordingly to prevent them.


## Further reading ##

* [Mined squares]({{< relref "post/170908-mined-squares-danger" >}}) (in my mind, after ...Bg2 in the tactic the whole southeast corner is glowing red, having been completely mined by the minors)
* Analysis of the openings [1. Nf3 f6 2. e3 d5 3. Nd4/3.Bd3](https://lichess.org/study/Dc345Be0)