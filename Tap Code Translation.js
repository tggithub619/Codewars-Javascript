//https://www.codewars.com/kata/605f5d33f38ca800322cb18f

// function tapCodeTranslation(text) {
//     let dict = {'a':". .",
//         'b': ". ..",
//         'c':'. ...',
//         'k':'. ...',
//         'd':'. ....',
//         'e':'. .....',
//         'f': '.. .',
//         'g':'.. ..',
//         'h':'.. ...',
//         'i':'.. ....',
//         'j':'.. .....',
//         'l':'... .',
//         'm':'... ..',
//         'n':'... ...',
//         'o':'... ....',
//         'p':'... .....',
//         'q':'.... .',
//         'r':'.... ..',
//         's':'.... ...',
//         't':'.... ....',
//         'u':'.... .....',
//         'v':'..... .',
//         'w':'..... ..',
//         'x':'..... ...',
//         'y':'..... ....',
//         'z':'..... .....'};
//     return text.split('').map(i=>dict[i]).join(' ')

    //   1  2  3  4  5
// 1  A  B C\K D  E
// 2  F  G  H  I  J
// 3  L  M  N  O  P
// 4  Q  R  S  T  U
// 5  V  W  X  Y  Z
//assert.equal(tapCodeTranslation("test"), ".... .... . ..... .... ... .... ....", `Text: "test"`);
//     assert.equal(tapCodeTranslation("total"), ".... .... ... .... .... .... . . ... .", `Text: "total"`);
//     assert.equal(tapCodeTranslation("break"), ". .. .... .. . ..... . . . ...", `Text: "break"`);
//     assert.equal(tapCodeTranslation("something"), ".... ... ... .... ... .. . ..... .... .... .. ... .. .... ... ... .. ..", `Text: "something"`);
//     assert.equal(tapCodeTranslation("final"), ".. . .. .... ... ... . . ... .", `Text: "final"`);

