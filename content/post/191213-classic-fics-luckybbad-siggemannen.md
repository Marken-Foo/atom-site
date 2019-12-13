+++
title = "Classic FICS: subtle space"
subtitle = "siggemannen - luckybbad, 2008"
date = 2019-12-13T21:24:48+08:00

lastmod = 2019-12-13T21:24:48+08:00
description = ""

slug = "classic-fics-subtle-space"
categories = ["blog"]
tags = ["game-analysis", "middlegames"]
type = "post"
series = ["Classic-FICS"]

draft = false

+++

This time, we're looking at a FICS blitz game from 2008. One of the strongest atomic players, siggemannen, takes the black pieces against luckybbad in a 3 minute, no increment game.

FICS database number: 214032815

View [the complete game analysed on lichess](https://lichess.org/study/Ozmx9xie/P9n2HN9W).

## luckybbad (1934) - siggemannen (2306), 3+0, FICS 2008-11-02 ##

{{< mainline >}}1. e3 e6 2. Qf3 f5 3. Qh5+ g6 4. Qh4{{< /mainline >}}

White opts to trade queens early. This particular line might be criticised in some quarters as unambitious. It doesn't press white's starting move advantage and takes both players straight into a playable queenless middlegame. Such a situation tends to favour the more skilled player.

{{< mainline >}}4...Qxh4 5. Nf3 e5{{< /mainline >}}

Black cannot defend both invasions on e5 and g5, but white's knight alone is not too dangerous and black can play around it. A white knight on d7 can be annoying (guarding f8 and preventing castling and f-file attacking ideas), so with the text move black prevents Ne5-d7 ideas. Other plausible choices include 5...Nf6, 5...Nc6 and 5...Bg7.

{{< mainline >}}6. Ng5 Nf6 7. f3{{< /mainline >}}

The most logical move. Black was threatening ...Ne4; for instance 7. Ne6?? Bb4 8. Nc3 Ne4 is mating. Another option was 7. Nc3 Bb4 (7...Ng4 8. f3 Bb4 transposes) 8. f3 Ng4 9. Nxh7 Nxh2 with a pawn structure similar to the game.

{{< mainline >}}7...Ng4 8. Nxh7 Nxh2{{< /mainline >}}

{{< fen-diag caption="Position after 8...Nxh2" fen="rnb1kb2/pppp4/6p1/4pp2/8/4PP2/PPPP2P1/RNB1KB2 w Qq - 0 9" >}}

Black has equalised. Material is even in a quiet position, and black enjoys a slight space advantage.

{{< mainline >}}9. c3?!{{< /mainline >}}

This move doesn't achieve anything useful. It blocks Nc3, and since the white queen is gone, opening the d1-a4 diagonal doesn't prepare more ideas. Claiming space with 9. d4 d5 10. e4 f4 looks more appropriate, and while black has more space, white should not be too much worse.

{{< mainline >}}9...d5 10. d4 Bh6!{{< /mainline >}}

Black starts to slowly put pressure on white. The text move prevents e4, leaving white slightly cramped. Now 11. f4 e4 would see black have a space advantage while white's bishops remain passive.

{{< mainline >}}11. Na3 b5 12. g4 fxg4!{{< /mainline >}}

Preventing g5, which would have freed white to follow up with e4.

{{< mainline >}}13. Bh3 Bg4 14. Kf1!?{{< /mainline >}}

{{< fen-diag caption="Position after 14. Kf1" fen="rn2k3/p1p5/6pb/1p1pp3/3P2b1/N1P1PP1B/PP6/R1B2K2 b q - 3 14" >}}

Black has a natural plan of ...Nd7, ...0-0-0 and trying to invade with the rook on the f- or h-files. Under pressure from the bishop on h6, white feels compelled to go for this plan of unpinning the e-pawn and playing e4, meeting ...Bd2 with Bxd2. This does however leave white's king dangerously placed on the kingside where black intends to attack.

White should look to develop the queenside quickly, or white will just be suffering an attack on the kingside effectively down material. The text move does so by preparing to push e4 and move the c1-bishop - in fact, changing the move order with 14. e4!? Bd2+ 15. Kf1 is also interesting, offering a trade of bishop invasions 15...Be1 16. Bg5.

A small issue is that the pawn on f3 is attacked, mining e2, f2 and g2, so white's king is in the way of playing Rh1. A different way to use the rook is to play on the queenside: moves like 14. Nc2 or 14. b4 immediately try to get an attack going, and perhaps make black think a little before committing to castling queenside.

{{< mainline >}}14...Nd7 15. e4 Bd2 16. Bxd2 0-0-0{{< /mainline >}}

{{< fen-diag caption="Position after 16...0-0-0" fen="2kr4/p1pn4/6p1/1p1pp3/3PP1b1/N1P2P1B/PP6/R4K2 w - - 1 17" >}}

Both sides proceed with their plans. Now is a critical moment for white. Black will soon open the kingside files and bring the rook in; how does white hold on?

{{< mainline >}}17. f4!?{{< /mainline >}}

Pushing 17. f4 is tricky, increasing the tension in the center when white's king is still vulnerable. The upside is that ...Bxf3 is no longer on the cards, Kf2-Rh1 is now possible, and black cannot take the f-pawn at the moment. However, white must deal with the latent threat of ...exf4 at some point, as the f-file opening will quickly lead to ruin.

White's other logical try was 17. Rc1, with the dual plans of counterattacking with c4, or in some cases the defensive rook lift Rc2 towards the kingside. For instance the counterattack could go 17. Rc1 Rh8 18. c4! Bxh3 19. cxb5! (the simpler pawn to take) c6 20. Rxc6! and with the balanced pawn structure, white holds the draw.

{{< fen-diag caption="Analysis after 17. Rc1 Rh8 18. c4 Bxh3 19. cxb5 c6 20. Rxc6, draw." fen="2k4r/p7/6p1/3pp3/3PP3/N4P2/PP6/5K2 b - - 0 20" diag-type="variation" >}}

In this line, black can avoid the R for N+P trade with 18...c6 19. cxb5 exd4, leaving white with an unpleasant defensive task to find 20. e5! Bxh3 21. Rd1! to hold on. (20. exd5? Ne5; or if 21. Rxc6? Rh1+! 22. Kg2! Rg1+ 23. Kh2 Rg2+ 24. Kh1 Rxb2! is a winning pawn endgame.) This line still requires good play from both sides and offers white some chances for a draw.

{{< fen-diag caption="Analysis after 17. Rc1 Rh8 18. c4 c6 19. cxb5 exd4. White must defend accurately." fen="2k4r/p2n4/2p3p1/3p4/4P1b1/N4P1B/PP6/2R2K2 w - - 0 20" diag-type="variation" >}}

{{< mainline >}}17...Rf8!{{< /mainline >}}

It is good technique to put the rook on the file before it opens, ensuring white has as little time as possible to defend after the file finally opens. Note that the h-file is not as attractive: 17...Rh8 18. Kf2! and Rh1 comes in time to defend.

{{< mainline >}}18. Nxb5?{{< /mainline >}}

White cracks under the pressure at last. This move is a mistake for two reasons. Firstly it trades a knight for a pawn, increasing the number of favourable endgame transitions for black. Secondly and more crucially, Nxb5? makes no threats, simply giving black a free move for the attack. The correct move was 18. dxe5!, preventing ...exf4 for good. While the position remains dangerous after that, white would at least be fighting.

{{< mainline >}}18...Kb8! 19. b4 Be2+ 20. Ke1 exf4!-+{{< /mainline >}}

Black patiently unpins the bishop and opens the f-file without losing material or suffering a counterattack. Black coordinates the R+B invasion to win with minimal fuss.

{{< fen-diag caption="Position after 20...exf4" fen="1k3r2/p1pn4/6p1/3p4/1P1PP3/2P4B/P3b3/R3K3 w - - 0 21" >}}

{{< mainline >}}21. c4 Rf1+ 22. Kd2 Rd1+ 23. Kc2 Rd2+ 24. Kc1 Rc2+ 25. Kb1 Rxa2# 0-1{{< /mainline >}}

An excellent positional game by siggemannen. White came out of the opening with a small space disadvantage, and black increased that advantage slowly, preventing white's space-gaining breaks. The game was less about black's occupying space as white's shortage of it, and a few induced errors sealed the game.

### Key points ###

- Slack moves like 9. c3?! and 18. Nxb5? can be harmful.
- Maintain and amplify minor advantages, like the space advantage here.
- Inactive pieces (like the a1 rook) are like a material disadvantage.

------

### Full game: ###

{{< mainline >}} 1. e3 e6 2. Qf3 f5 3. Qh5+ g6 4. Qh4 Qxh4 5. Nf3 e5 6. Ng5 Nf6 7. f3 Ng4 8. Nxh7 Nxh2 9. c3 d5 10. d4 Bh6 11. Na3 b5 12. g4 fxg4 13. Bh3 Bg4 14. Kf1 Nd7 15. e4 Bd2 16. Bxd2 0-0-0 17. f4 Rf8 18. Nxb5 Kb8 19. b4 Be2+ 20. Ke1 exf4 21. c4 Rf1+ 22. Kd2 Rd1+ 23. Kc2 Rd2+ 24. Kc1 Rc2+ 25. Kb1 Rxa2# 0-1 {{< /mainline >}}

PGN:

```[Event "FICS rated atomic game"][Site "FICS freechess.org"][Date "2008.11.02"][White "luckybbad"][Black "siggemannen"][Result "0-1"][WhiteElo "1934"][BlackElo "2306"][TimeControl "180+0"][Variant "Atomic"]
1. e3 e6 2. Qf3 f5 3. Qh5+ g6 4. Qh4 Qxh4 5. Nf3 e5 6. Ng5 Nf6 7. f3 Ng4 8. Nxh7 Nxh2 9. c3 d5 10. d4 Bh6 11. Na3 b5 12. g4 fxg4 13. Bh3 Bg4 14. Kf1 Nd7 15. e4 Bd2 16. Bxd2 O-O-O 17. f4 Rf8 18. Nxb5 Kb8 19. b4 Be2+ 20. Ke1 exf4 21. c4 Rf1+ 22. Kd2 Rd1+ 23. Kc2 Rd2+ 24. Kc1 Rc2+ 25. Kb1 Rxa2# 0-1```