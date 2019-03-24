+++
title = "The block and the lune - pawn play made easy"
date = 2017-08-26T21:58:40+02:00
description = ""

slug = "block-lune"
categories = ["blog"]
series = []
tags = ["patterns", "pawns"]
type = "post"
+++

Pawns have long given me trouble in atomic chess. They don't seem to obey the same rules as their normal chess counterparts: no doubling, controlling space differently, isolation not being a weakness. Worse still, calculating pawn moves and captures in endgames had usually left me completely confused and overlooking moves. The brute force approach to evaluating each pawn move on its own was a straight road to time trouble and blunders, letting opponents escape with draws or even wins.

After many games I came to a fundamentally different way of thinking about pawns. Instead of seeing pawn structure as a mass of pawns spanning the entire chessboard, I now differentiated between the pawn "macrostructure" which is shaped by features such as open files and passed pawns, and pawn "microstructures" which are small groups of pawns in particular formations. By becoming familiar with these microstructures, I found that I could quickly judge what pawn moves were necessary to make the right microstructures appear, tipping the position in my favour.

(Aside: Pawn microstructures are a thing in atomic because pawns always stay on their original file, unlike in normal chess. Each pawn island interacts very little with the others in atomic, and can be considered almost independently of the rest.)

The block and the lune are two closely-related basic microstructures that come in very handy when thinking about endgames and middlegames.


## Block and lune ##
Both these structures involve a pair of your pawns in adjacent columns, and a pair of enemy pawns in the same columns.

The *block* comprises two of your pawns next to each other on the same rank (e.g. wPa4, wPb4). In this formation you can always keep the position closed. Whichever of your opponent's pawns comes forward to capture, you can push your threatened pawn past it, keeping all four pawns on the board and both files closed. It's good to use if you're ahead on material and want to simplify to a winning endgame, avoiding the complications of having open files and passed pawns of both colours.

The *lune* occurs when one of your pawns is head-to-head with an opponent's pawn (e.g. white pawn on b4, black pawn on b5), and the other two pawns are behind them (e.g. a white pawn on a2/a3 and a black pawn on a6/a7.) With this structure, either side can force the exchange of at least one pair of pawns, and the remaining pawns can either be exchanged off or pass each other. This formation yields the opposite results of the block, and can be used to secure complications or open lines.

<iframe width=800 height=495 frameborder=0 src="https://lichess.org/study/embed/uZFAS28p/gKEmO6RI"></iframe>

[//]: # (FEN: 8/8/1pp3p1/5p2/1PP2P2/6P1/8/8 w - - 0 1)


### In endgames ###
In a winning endgame, the player with the advantage typically prefers to make blocks (to ensure at least a pair of blocked pawns on the board to win 1 queen up), while the defending player usually wants lunes (to trade all pawns and connect kings, or to get counterplay with their own passed pawns.) There is thus a struggle to be the first player to create the microstructure favouring them.

The simplest example (which incidentally highlights the basic block/lune struggle) is the following position.

<iframe width=800 height=495 frameborder=0 src="https://lichess.org/study/embed/uZFAS28p/4tT8tOjo"></iframe>

[//]: # (FEN: 8/8/8/pp6/8/1P5k/P6P/7K w - - 0 1)

White to play is up a pawn, and the kings are essentially already connected. However, the queenside pawns aren't quite stabilised yet. Black wants to trade off all the pawns to leave a drawn KQ v K ending; White wants to leave pawns on the board to reach a winning KQP v KP ending. This is where understanding the block/lune microstructures comes in handy: we would immediately see that the correct move for white is to leave a block with 1. a3!. Any other first move will be met with black making a lune and trading pawns, drawing. (As black's pawns are further advanced, white cannot afford to give black a passed pawn, so will trade both pairs in the lune.)


### In middlegames ###
In practice, usually one side is trying to open the position (say, to get open files for a rook) while the other is trying to keep things closed (to defend against the rook invasion.) The side trying to open the position will attempt to make a lune, while the other side tries to set up a block. Which side succeeds will affect how the game unfolds.

The following example is rather involved if we calculate the lines to their ends, but it's intuitive once we understand the strategic demands of the position.

<iframe width=800 height=495 frameborder=0 src="https://lichess.org/study/embed/uZFAS28p/pcN87F9E"></iframe>

[//]: # (FEN: r2k1r2/p4P1p/1p2p1p1/3p4/1PpP2PP/2P5/P7/2RK3R b - - 0 1)

Black to play is in trouble. Material is even, but one of black's rooks is tied down to defending against a pawn. If the position were to open up, white would essentially be a rook up over the rest of the board. Black is playing for a draw from here, and thus wants to keep the position closed securely. White on the other hand would like to open lines, trade both pairs of rooks and be all but assured of a won pawn endgame thanks to the pawn on f7.

Now let's look at the position with the help of microstructures. The pawns on the a-, b-, g- and h- files are still fluid. Black would like create a block, but only has time to do it on one side. Considering that black would be in severe trouble if the kingside opened (white's pawns further advanced, white's plan of Rh1-h8xf8), our intuition points to making the kingside block first with 1...h6!. As it turns out, this is enough to salvage the position, even after the white queenside lune.

-----------

I found the block and the lune to be useful heuristics that save my thinking time and effort. It's much easier to play when I know that I can make a block and not need to worry about those files opening, or to see immediately how to use a lune to crack open the opponent's line of pawns. It helps me avoid getting bogged down by long sequences of pawn moves - more results for less work!