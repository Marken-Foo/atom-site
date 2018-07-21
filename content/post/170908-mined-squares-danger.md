+++
title = "Mined squares - seeing danger"
date = 2017-09-08T22:33:42+02:00
description = ""

slug = "mined-squares-danger"
tags = ["general-advice"]
type = "post"
+++

In order to play any kind of chess well, board vision is required. Put simply, it's the ability to see which squares are under threat and which squares are safe for your pieces. In atomic however, "safe" doesn't just mean "not attacked by your opponent".

Because captures trigger an explosion that affect adjacent squares, you should always be wary of leaving your pieces next to each other, or next to your own pawns. Your opponent could potentially take out both units in a single capture, winning material.

I thus got into the habit of checking for what I call "mined squares". These are squares that are adjacent to my attacked pieces and pawns, as the opponent could potentially win material were I to carelessly leave my pieces next to each other. This helps to avoid straight-up blundering material, and also shapes strategic play, as leaving too many squares mined by your pawn structure can ultimately be a fatal mistake. Let's look at several examples.


## Direct examples ##
A basic example is the position after 1. e4 d5. The squares around e4 (e5, d4, d3, e3, f3, f4, f5) are mined for white, and from this you can see that 2. Qh5 g6 3. Qe5?? is bad, since e5 was mined - 3...dxe4 wins the queen. (Compare this to 1. e3 d5?, where e5 is not mined, then 2. Qh5 g6 3. Qe5 Be6 4. Qxc7 would win material.) This is a simple case of mining being used as a safety check to avoid losing material.

Play could continue instead 2. d4 Na6 3. Na3 Nb4 4. Bg5 f6 5. Nb5 Bg4 6. f3 Nxc2 7. Nxc7, and here we choose 7...a6!, defending against Bb5+. The other choice 7...b5 mines b4, preventing the active development ...Bb4 since it would lose a pawn to Bxb5. 7...a6 is therefore strategically more flexible, leaving the bishop more development options due to fewer important squares being mined.

<iframe width=800 height=495 frameborder=0 src="https://lichess.org/study/embed/9GFpNdwd/Ej3Madxs#2"></iframe>

-----------

Another example of this a6/b5 choice is in the line 1. Nf3 f6 2. e3 d5 3. Nd4 Bg4 4. f3 Bf5 5. Nb5?! Bxc2 6. Nxc7, and now black's best move is 6...a6!. Although 6...b5 looks natural to restrict white's bishop, the problem is that it mines b4 and c5, preventing black from later making a ...Bb4 threat or playing ...Bc5 to safely block the c-file. Again, strategically speaking 7...a6 is more flexible and should be preferred.

In this particular position there is also a more concrete reason: consider the continuation 6...b5?! 7. Rc1 Rc8 8. Rc7 Rxc7 9. Bd3 g6 10. Kf2! e6 11. Rc1, and now with c5 mined 11...Bc5 12. Bxb5 is drawn. This is an example of mining being used to prevent the opponent from defensively closing a file or diagonal, and also why you don't want your pieces' natural development squares to be mined.

<iframe width=800 height=495 frameborder=0 src="https://lichess.org/study/embed/9GFpNdwd/ZxPVhgbj#12"></iframe>

## Advanced example ##
Subtler examples of mining can be found in endgames. Instead of a direct attack on a piece that mines a square, the mere threat of a passed pawn does the job.

In the following position, white is a pawn up but cannot directly promote a pawn without black trading off his last pawn and reaching a drawn KQ v K connected king endgame. The subtle winning technique is to force a zugzwang in order to allow white's b-pawn to push past black's c-pawn. We start by realising that black's king can be trapped in the corner!

Play begins 1. b5. Now if white could push b6 without black being able to recapture with ...cxb6, b7 would follow and white would have an easy win with KQP v KP. Thus the threat of b6 mines the squares a7 and b7 for the black king. Visualising these mined squares, we see that black's king is caught in the corner (a8-b8-c8), and we can use the white king to box black into the corner for zugzwang.

The full line goes: 1. b5 Kb8 2. Kc8 Ka8 3. Kb8 (zz) Ka7 4. b6 Kb7 5. Ka8 Ka7 6. b7 and winning.

<iframe width=800 height=495 frameborder=0 src="https://lichess.org/study/embed/9GFpNdwd/KFX6huX4"></iframe>

The same visualisation of mined squares applies to a few tricky won pawnitisation endgames (white is a bishop up but black's pawns are all on the opposite colour), where white traps black's king in a similar corridor for zugzwang. The analysis can still be hard, but is often simplified by visualising the mined squares.

-----------

Mined squares are a useful visualisation trick on several levels. First and foremost, if alarm bells ring when you put your pieces next to each other, you will reduce the chances of hanging material - always check that you're not placing your pieces on mined squares without a good justification. Next, mined squares can figure in strategic considerations; by minimising the number of squares mined, you avoid having passive development and cramped positions. Lastly, visualising mined/dangerous squares can let you see chances you wouldn't have otherwise - like realising which squares are safe for the king in endgames.

Imagine a force field, blast radius, coloured squares or what have you - just picturing the mined squares can sometimes reveal insights into the position in front of you.


_(Extra tidbit/おまけ: I actually first ran into the idea long before playing atomic, while solving the following regular chess study (+, or "white to play and win") 6n1/8/6Pk/3P3P/8/7K/8/8
White's king navigates what is essentially a minefield thanks to black's lively knight - the reason why I have the concept in my head as "mined squares". As a bonus, the explosion metaphor lends itself well to atomic.)_