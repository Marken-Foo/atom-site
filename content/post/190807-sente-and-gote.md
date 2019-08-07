+++
title = "Sente and gote"
date = 2019-08-07T00:44:07+08:00
lastmod = 2019-08-08T00:44:07+08:00
description = ""

slug = "sente-and-gote"
categories = ["blog"]
tags = ["terminology"]
type = "post"
series = []

draft = true
+++

There is much to learn from the study of chess and chess-like games in Asia. Two useful terms we can borrow from their literature are *sente* and *gote*, which relate to the concept of the initiative.

Sente (pronounced *sen-teh*, 先手) and gote (*go-teh*, 後手) are frequently encountered terms when studying the Japanese games of go and shogi. I find that they are clearer and more focused terms than "the initiative" that we have in chess. Rather than read a dry essay on the nature of time on the chessboard, it's probably easier to understand by seeing a quick explanation of the terms followed by many examples, so let's get to it.


## What is sente and gote? ##

A good way to learn new words in a language is to see them used in a sentence, then try making a new sentence yourself using them. So instead of throwing out a definition of sente and gote here, I'll just show you how to use these words borrowed from Japanese.

Sente and gote are adjectives; a move, a sequence, or a player can be **in sente/gote**. One says:

- This move **is sente/gote** = this move forces black to react/does not force black to react.
- White **achieves something in sente/gote** (e.g. exchanging a piece) = something is accomplished while finishing with white to move/black to move.
- White **has sente** (but not "has gote"), or **is in sente/gote** = white is to move, and [does not need to/must] react to black's threat/idea.

You might already sense that these terms more precisely describe what it means to "have the initiative" in various contexts. A semi-literal translation that I feel captures the essence of the above is the following: sente = leading hand, and gote = following hand. In general sente is associated with dictating the flow of play, and gote is associated with not dictating the flow.


## Examples ##

I find myself reaching for these terms quite often when analysing or annotating games, as they succinctly and precisely describe a common concept. The following examples show a variety of situations in which I would naturally use the terms sente and gote in describing the moves. Take them as a demonstration of (a) how to use these terms in a discussion, and (b) how to think about the initiative.

### Rook trade ###

A basic example is also a very common one: a situation where both sides have rooks on the same open file. How they end up being traded can distinguish an experienced player from a new player.

{{< lichess-embed src="https://lichess.org/study/9GFpNdwd/8gJhJaLk" >}}

[FEN: 3r1rk1/8/2p2p1p/5Pp1/pp2P1P1/PP6/4K2P/3R3R w - - 0 1]

In this position, both white and black have rooks facing each other on the d-file. How white makes the rook trade will result in the gain or loss of a single tempo. Normally this will give a slight advantage; in this position it will determine the outcome of the game.

A common mistake by less experienced players is to play 1. Rxd8? trading the rook in gote. Black gets to move freely immediately after, taking the file with 1...Rd8! (and winning the endgame, an exercise for the reader).

Instead, the correct move is **1. Rd7!**, threatening Rg7+ with mate soon. This forces black to capture **1...Rxd7**, and now it is white's move rather than black's. The rooks have been traded in sente.

To reiterate the point, **1. Rd7! Rxd7 2. Rd1 Rd8 3. Rd7!** (sente again) **Rxd7** trades the second pair of rooks in sente, and white wins the endgame by one tempo. Had white played 3. Rxd8? instead, black would win the endgame after 3...c5! (an exercise for the studious reader) - such is the difference one tempo can make.


### Queen dance ###

Strong players will recognise the value of every tempo at any stage in the game. Consider the following position from Illion - Natso, April 2017 (https://lichess.org/hcpVTQQD), after the opening moves 1. Nc3 e6 2. f4 Qh4+ 3. g3 Qh5 4. Nf3 Nf6 5. e4:

{{< lichess-embed src="https://lichess.org/study/9GFpNdwd/5scbYk4u" >}}

[FEN: rnb1kb1r/pppp1ppp/4pn2/7q/4PP2/2N2NP1/PPPP3P/R1BQKB1R b KQkq - 0 5]

Black now wins a pawn with **5...Nxe4**. Instead of trading queens immediately with 6. Qxh5 (which is fine too), white plays **6. Qg4!?**, intending to get the trade in sente by persuading black to take the queen on his turn. The game continued **6...b5 7. Nd5!** (exploiting the pin on the e-pawn) **Qh3!** and white caved with 8. Qxh3, letting the game continue with 8...exd5 9. Bh3 f5 10. 0-0 with some compensation for the piece. Instead **8. Kd1!** would have been a full commitment to getting the queen trade in sente, forcing **8...Qxg3 9. Nxc7** where material is even and white's displaced king is probably not too much of a liability.

This kind of queen dance occurs fairly frequently, with each side wanting the other to make the exchange in order to win a tempo. Take note of the idea, as having even a single tempo more can sometimes make a big difference.


### Reverse sente ###

Tempo considerations also matter when defending b4/g4/b5/g5. Take for instance this position from pashpash - linetester2, Feburary 2018 (https://lichess.org/nRFHBCX5).

{{< lichess-embed src="https://lichess.org/study/9GFpNdwd/StbEseJB" >}}

[FEN: r3kb1r/pp1p2pp/5p2/4p3/3P4/8/PP2PPPP/R3KBNR w KQkq - 0 7]

Black is a piece down but just played **6...e5**, threatening ...Bb4+ to disrupt white's king. White has two choices to defend: 7. a3 or 7. b4.

The key is that black's real threat is to castle quickly and bring the h8 rook to invade along the c-file for a perpetual. The point of ...Bb4+ is to gain a tempo for this. **7. a3?** does not actually stop this idea, and black draws with **7...Rc8 8. Rc1 Rc2!** (trading rooks in sente) **9. Rxc2 Bb4+! 10. axb4 0-0 11. e3 Rc8=**. White cannot stop the rook coming in for a perpetual.

Instead **7. b4!** is the correct move, preventing black's sente threat of ...Bb4+. In go and shogi, this removal of the opponent's sente threat is called reverse sente (*gyaku-sente*, 逆先手). Now after **7. b4 Rc8 8. Rc1 Rc2 9. Rxc2 Be7 10. e3 0-0 11. d5!**, white has bought enough time to defend after either 11...e4 12. d6! Rc8 13. Bc4+, or 11...Rc8 12. Bd3 f5 13. Bc2!, keeping the extra piece into the endgame.


### Making a threat != having sente ###

Making an aggressive move first does not necessarily mean it is a sente move. One example that comes to mind is a mutual knight invasion. Let's follow Erdmundr - Gannet, September 2016 (https://lichess.org/TxOCUolw).

{{< lichess-embed src="https://lichess.org/study/9GFpNdwd/Dsd11RsY" >}}

[FEN: rnbqkb1r/pppp1ppp/4pn2/8/4P3/5P2/PPPP2PP/RNBQKBNR w KQkq - 0 3]

The opening moves 1. e4 Nf6 2. f3 e6 have been played. White's f-pawn is no longer next to his king, reducing the potency of black's ...Ng4 move. Therefore, white plays **3. Nh3!**, daring black to jump in. Black's best here is to defend with 3...g5.

However, in the game black made the instructive mistake **3...Ng4?**. This makes threats: ...Nf2 or ...Nxh2. But it is not sente, as white does not need to react defensively with something like fxg4. White instead countered with an even stronger threat: **4. Ng5! f5 5. Nf7 Qe7 6. Nd6+ Qxd6**. The whole sequence was sente; black had no choice but to react to every single one of white's moves and had no time to counterattack. White thus won black's queen in sente, and after **7. exf5** white went on to win easily.


### Forcing move != sente move ###

A forcing move is not necessarily a sente move. Making forcing moves without purpose might help your opponent make moves that they want to make, while the moves you make yourself may not even be desirable. Sente is about accomplishing something for yourself while your opponent is unable to do the same while reacting. A nice sequence in onubense - dpalm, AWC 2017 shows this. (Round 3, Match 29 Game 1: https://lichess.org/K7MsEKK3)

{{< lichess-embed src="https://lichess.org/study/9GFpNdwd/yrG8jHOL" >}}

[FEN: rnb1kb1r/p4p2/2p1p1qp/1p6/3P1P2/2N3P1/PPP4P/R1BQKB1R w KQkq - 1 10]

Out of the opening white has achieved a healthy position and an extra pawn. Black now threatens ...Qxc2. There are several ways to deal with the threat, and I highlight here two in particular.

Attacking the queen with 10. Bd3 would be forcing, but not really sente. After **10. Bd3 Qg4 11. Qxg4** black has traded queens in sente, and **11...f5** sets up a pawn structure making white's bishop on d3 look ineffectual. White is still much better (black's pawn structure and development is very bad) but white could definitely have done better.

Instead white continued with a smooth sequence demonstrating how to take control. **10. Qh5!** pinned the queen and threatened Ne4 and Nf6+, so forced **10...Qxh5** in response. Then **11. Ne4! Be7 12. Be2! h5 13. Bd2! a5** (sente until here) **14. 0-0-0** finished development in one burst while black was forced to make the non-developing ...h5 and ...a5 moves in response.


## Now what? ##

Knowing what sente and gote are is unlikely to help much in isolation (other than being able to concisely annotate games). Rather, I think it is good to simply be aware of the importance of time in chess and related games. Coming to us by way of the Japanese games of go and shogi, I've seen these terms used in the context of xiangqi, and even card games like Magic and Hearthstone. Applying the ideas to chess and atomic chess is completely natural, and may help you to understand atomic middlegames a little bit more.
