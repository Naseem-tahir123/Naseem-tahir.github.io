'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "fc2dac873fcc750d6f69018cdfb9a135",
".git/config": "aee61d7cd837046571cb64eabeee643d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4761f8eb85a81abe9ef0ded52f0c701d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "154a6763e2a20b69efe39554d08858d0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dcdb7340b7a447dda16064789e5b41b0",
".git/logs/refs/heads/main": "599ae43ea1fbb69b9c55089dacd273fc",
".git/logs/refs/remotes/origin/main": "30c439168659fc252ca1aa0516bfc404",
".git/objects/00/84943c80858dd1060e467615c392b5e5f7a5bb": "48d2b5ae68448358d54e3be04bf7430d",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/05/20e432e343f3097b0b263b302f531989e9ebc3": "1806da1a9aac4da261931ad4adacdda2",
".git/objects/06/4028a09d47776edd4dfbbbb13f9e74a8af1abd": "0b7e3e8400f47e31ec16daa6bf508bac",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0a/f3ffb5a20d3908f03fe82c173d3061c73d1891": "f3acc19f5d6b9ef359280065c40e1277",
".git/objects/0c/4ed70709be4e7d5178ebe2b80b6bbf13076810": "b995ebdeaea121d0c4b4c94b0f113659",
".git/objects/0d/8168437dde8a84c4d5175b3a2b879f310c91ca": "a7b52685740240cef88fafb091a1bbab",
".git/objects/11/1ee00656b606b5f6052f4e1f473dda63ff92fb": "c76cd967bd112c38725e56c4b5556c08",
".git/objects/14/f6ab964d5e2aa353bf06c78fe9f2a897861201": "14074a8520eda02fc51441f4991e112b",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/17/057a2bf7ab4bbc33ab2c291ecb29becf0086cd": "951b55187715cd1be96f9d5be8e04450",
".git/objects/17/b9883399b66abf24ad718957f40d86337c21de": "544849e5a6fae56d6f7fc837bfb81cb7",
".git/objects/18/58d96e2f16ca98cbd61ef612f4bb1689af65c1": "e9ed22a438432e286f43be6a5fcbd86c",
".git/objects/1b/37db699e110650f198c7c3c26fdfab9590e3a8": "cad9b2d6f225a15a3ff6524453d9765d",
".git/objects/1d/7cea897e1bfaf775705aa4b867af5049fb2049": "b116782b7610d6a069fecfc1a9d1ac06",
".git/objects/1d/b2943a616beb65fd4bbd412ae9c4ad130e24c9": "b5ab5386b5e3928114cf80eda977207e",
".git/objects/1e/25fb4841dbfcbc6e4fa75d9417a4113ba250bc": "e91280155bc02e320c2a664e7fefc7b5",
".git/objects/1f/0c3649004e87b6b84c5fa57b0fc9e50c99056d": "28f65cf4a512fc48cfb6403a2a7ec528",
".git/objects/1f/56867e70c434d8dff86a85ca09e6d942a38257": "27d844aa56b9fd88c276a37ccf62cee6",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/93413d9fb5f17bde8c8bfe9ab8a124ab5740e7": "9a50f9a0cc3164114f29c34881dba5e4",
".git/objects/27/788148a78335dc4db722adedf5a86c30b8ce0e": "758d35b436891c09d4b932039eeb5d63",
".git/objects/2b/ae8d6bc672b9f55f57c0a202d6cef0777fa9de": "9e608ec505f86d1d74da50b7620fc93f",
".git/objects/31/11c623a775962d214e9cc4282c050e0f54edfc": "4a15c9c17f177b85f998aef4a91b1222",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/3b86b7c321b5f19e04e2cd612f10c6038db171": "eb4466bd64d686b2d56bb90239bddda8",
".git/objects/34/3ed2f581325f68829bccdb70d0b1b3670ebdb3": "9f47cf3b6ad4c6ce2aefffb851887ca0",
".git/objects/37/52783cf094b50e73db42eb73229b197d8b4df8": "6a45ae36a11e25001a5ac2dc01a63381",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3e/ac245fee4d1adbe97ae3da9706d9547b97b307": "737570cbd4d22bd7fce326e4020344c3",
".git/objects/3f/81719695604b4ca406f382072e405da3cd5cf1": "037ee751e949bae357b494000c945530",
".git/objects/44/b3baac14fd8c0123ec0752298f9347b279357b": "25148edc8d25cef53ef834a05178a4e2",
".git/objects/46/373db31ced20e503ba4c4e52735de67a717005": "195244cbd96944d20ba76cd2fb8d9ce3",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4d/7d8e43e256fb7405c629b71e64e3cbd0c0b8c6": "aa21b5c2ef4fcbc7e24114605cb13a39",
".git/objects/53/437e823f57c70890b6177f3a95ff06eab099b6": "4b6b448b0355c36c136fad97888a309b",
".git/objects/57/305982e773b4917708f7306a2765f0daf52ebb": "8d279a5cc1e38966df28071f4a4afa42",
".git/objects/57/9d7e469071f34e411ab3c4ce54dac90062a6eb": "cd2945c1a1f55e9d4a269ef5289db391",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5a/8ae5bc99a2746fd2cd0602dcecde5cb975ba5a": "f0abfa17bffe967a8826dc97fadf3c4c",
".git/objects/5a/8f6ef1b801bca70f270386486ec6aaae4e5059": "478fdcbb70f43e139f6e293d2e5c011f",
".git/objects/5a/c5f1e017055b3f9967c408acc58ead783505e3": "d00f00b2a0a82fff61444edf88638a95",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/5d/1f0aa285a21fc4687d8a2ea442d4dc5b935f86": "571b5beeb2f2b649bd057e41641f9bfa",
".git/objects/5d/5b189d1de6b446d15498fb13e1c293b5a97d76": "e88721d0e1b96d5c10f31b2d1f65a30e",
".git/objects/61/e0ec4efb86c459bba3aa7cdb1c47e5705fdbe3": "a260886c3a80ee143edff79ce72542cf",
".git/objects/64/03b8eca4772df4fa7a2986de1b5317573e8c56": "36774eed79900bd64c5f84fc532d7339",
".git/objects/64/47413bd9d792311dfe32c2a70b3fef82521f20": "36306599b0925dc2e8961da319554930",
".git/objects/64/8c1795dee5c328e85b8eec47459ace6c6b3afc": "a062775540eed7e810765a8d0e06a493",
".git/objects/67/621ea999948f806d9452b3a5aa8048a25ffe18": "60038a1edad3d7d924db76b9b795f02b",
".git/objects/6a/63b25c7a5d7cbc7f3a4e15b50456eff8a61207": "94dfc72f7c718cad89630ced7849d815",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/380f467a1ca94b64d753c9fb660c969640e045": "2cebf43cc47176029fff47b5fd505e88",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/74/46f64685b83cf9939a2903aaf52e63dbf80952": "62bf161ac0ee904efbb4ca25d65b63fb",
".git/objects/75/d34124a629f81ac2fb78c74b53b0876a0aeb99": "0e9b94920988a31736710705f3c3e7f0",
".git/objects/76/dd5c71d73fb0c63c7a0fa4495b6d60fd317dd3": "36f66e0df344f164a51c24fd371a3b01",
".git/objects/77/9f327be225aedd8f5e284166c4957d5eb2c221": "1f05e9f4e9224dcb523f01050ab818b8",
".git/objects/7a/a56b1f20f5fa08d416aaa6eb3fc25c15ed08d8": "f881f680205fdf6d1444b47b50195225",
".git/objects/7d/4f3fc8a7efc60873c190f59c8494a0bb2a1c89": "b3871a8ee494b1d2f3b97f79aeb2bf37",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/86/bb971747f241c1ddcd4e1e99efb09988736db1": "173f1c85e49a6e92cf391fc25f68feba",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/de11e20efa1416b7149c56dd7d1458d5854e31": "f03eedbd5ff02d4c31f18fda729f70d8",
".git/objects/89/4eec16fc6cbb2799c5ac982d43489cb94d2665": "ee69bc330f6596d2d8c5ef859f89fe89",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/2f2313ef937d6f5a188b8ee5a4ad9a1f6ecab2": "cc3935ccfb7f5bc504237d907279f0fd",
".git/objects/8c/0bd5134c76c95349f7262547feb6bc998fed53": "d787b7ffc3908fcf050d610d2b973c00",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9b/42b4fd58f54b4ce25ab2287f6f6ec79c7e7627": "bad10fdbd497c8f8336855637f0acca7",
".git/objects/9f/095a466b7187b50c0071e8d4943dc072fe9c26": "676a9754c865e123b0c1d2bfc7106751",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a3/2f02624639fb13961311ad305c0a33ffc92455": "f43dc76640077bcbf4f0c8bb09f3491c",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/a4/1c8ffa7fa778fe00cde1b84bb05401669b4576": "0f707276a1fa0f53100682098f9b939d",
".git/objects/a4/90af3f11f2cc583e9c58cd1cbb4f319a9f5906": "5f16aaebd00970e2b992d35b8cec0b8a",
".git/objects/a5/3efdf92300d180241adcd14d81d15a734c4e08": "cdce04155deb291d95d5b2a8a45a186e",
".git/objects/a5/8980de99311eb71e91e8c17220173d47fa3a4f": "14c89ec52f1a2dd185c92156e59c8a7b",
".git/objects/a6/945088076f751cc96301ecf8fc5675b0e94315": "4f2fd9291c21b0f42d4580993d464bf6",
".git/objects/a8/c6daa55780664dc78e6be9627e59651b439093": "39406c183cd48076a0c1d04b1dd43e4d",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/ac/72f039f5f334da98bfd3fca1ff0d261ec51093": "23b1bd405642ccc753313ead7ad83b8f",
".git/objects/af/25101ff2b32bfd78c1adeb7535192106f657f1": "b44624abc7b904ac5ce1040f5bf21b2c",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/af/ff43f3cfd8a56b71f60909a18061690810dd8d": "5cec25effd109d6d313735c8211c4c03",
".git/objects/b2/77f09453ea45eea2bda3fd802671775eb3a431": "528faca9b67da8ef71e5e18b86a95143",
".git/objects/b3/df2d303b22954a18fd05811a7cd4566e5302f7": "ea5cf29c73e8efc4a3c9f7d2c19d9c3e",
".git/objects/b3/e34a7df1e6915edb47f35d9addd7d96a88aff2": "1553dd9f1f4bc258fd06a23d746be3b2",
".git/objects/b4/3b9c15f56f4745d85a9f6761706225884a02c2": "45b958ddf7838807c720084c4f170f10",
".git/objects/b4/7f71fb1ab89fa1d24c56d90e8c515b7a9177ed": "b40ff7370624416c4178ddb8cd1462f7",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/b53067f06f6768aa9d329da2fa715fb1866bf4": "6dea1b4424835b999f3552dbd67f7126",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/2c0494e81c7327ae3af6486089fee078e9d492": "568148cae2bf00a0f8229a7f1c87f555",
".git/objects/bb/8c511d496d43e789dee9cfdc18dee013c5d447": "d06f030212fe5efc06cddeb1eca4452b",
".git/objects/bb/cdbc96775cb6b343fbd1fd3c45ef63d4404c95": "bcb13615a93d9bf33ffd493b2649dde1",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/be/bb8f5f37d1b3f4d282870c3fce91182f450824": "badb3274a35bb7e75b42c227010572af",
".git/objects/c4/c6c56721e5ad031aa6bd92cf412c1414f69fd8": "146e0be355c421f0da9d67820c64db38",
".git/objects/c5/16376834e67587e093d01c04955c3729a89fc1": "fbf6522e19ad061011c886d3b058fdc6",
".git/objects/c5/ce93a6db4a52a3c813ef649f221ac0ef6f9782": "fb4613947f4829acfe5a00cd68f48cd1",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/cb/b862d2eca1c7290d1bde178b7180b5bc78f6d4": "7ea07adbd892c4ebdf4c13a10eb18a88",
".git/objects/cd/71e992ccea42b2a18e1eeafbf9e4b629b2b37c": "784f7728e10b0a6c6ffb924fcc46ea5a",
".git/objects/d0/4aab2f055e21cb184d1a99424f1cb2ac5f263b": "f3bb538f5207f2e084833293ff34773d",
".git/objects/d2/8d9dfe4890ce8b542c46cc240865eaa32053a9": "d494a7300fe211036961af5821d9ee0f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/dd8814f9c6926275a654376f8a48422db054a8": "6eff4a566f7012e8e0206df01cb352cf",
".git/objects/d7/fc095845cd26f970599e87f7d92d552ea4928d": "76e6e3e7bd92358ef1f319669678c50e",
".git/objects/db/22fbb91645600fde1305e3aa9a9714afb12fef": "7ffb0641e264115b7f410582b26a837d",
".git/objects/dc/4e5173254615ae843003f73ac4ff7e091fec42": "d520f2eca36db85dfa53654e0f7c9ec7",
".git/objects/de/6825b2fd2326d83e3a0abb8c90fd310c3fde0f": "1f03237a5ec49b0f49877f3873f7c673",
".git/objects/de/9f51384ddbc9b54639da91451f61ca4423b10d": "b47fc7cd6d2ee519779cd0870d1849dc",
".git/objects/e3/35e8f7fe37571035b0f38e5a6b0885e78c4b88": "be2a32295f298a7de351bb4ab6bcfbd6",
".git/objects/e7/bda69b2920915279355a4f38aa8648b91036aa": "34002cbe0ca250eedb0986be307a768e",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e9/5222fd57be617f12ae4b63b486b5ec66bb793b": "84b24ef7a9bd135b1154fa9f1017c94b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/09da24c3848f28232d20b61b1e8e4a38880e05": "f54b1ecbcb09eec63c4b8aa8f280068d",
".git/objects/ec/5c8e1d752c9fc0efd373dee8a3651a162d6def": "dd781602d23a3aeedfbee799fb76ce16",
".git/objects/ec/7f4407327da1d28193fd7d90f7aca138af19ca": "2b23b78acd49921958b3c5a5b68e75c3",
".git/objects/ed/572a8b5759b9dc405caaff018e479c797b3902": "8a89bc28e8851740ea469c8ea45bfdab",
".git/objects/ed/b540138501f7739b13315194fd00572711193d": "513da74de213a4c845fe010fda93c2d0",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f0/ef0e022ca42d0d94d7ca8dd4ce66c2ba526a93": "179d62cf56faf774e291bc81afdee26b",
".git/objects/f0/f5ad8c496d45420427c122290ea983d6808624": "cf0007281ee381ee848443f5c04fdde2",
".git/objects/f1/03fac58b3cb932ad6a61d46ff7b4518dd60d06": "f8a85e6942907206c535bc972e895d46",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/f6/166be009fac58f48cc3c17c5ab94753d504326": "87e0b33d0478dcdc7d8c5e41992c5110",
".git/objects/f9/7a8bd49574c17df9c35f36547e83db663be9bf": "6f0c71902560140f2f3bc77e03982fde",
".git/objects/fb/56fe3981b404c91df4b0749bdd8a6dfae21c36": "8d71dc2673ea5cabbde1ae2ae011fef2",
".git/objects/fc/0f322e61617230621468a8090f25edb73110d5": "ecc6495fc2bada51dd28771bea5b58eb",
".git/objects/fc/59ab13d63b79f8f668a328ca90485eb4e8a5fb": "afadf6211823898b44927b1b016a9cd0",
".git/objects/fd/7f6f9ea61e6341df1f33d899d28269c179c776": "197c914559d7d16f53a839df3fbc6312",
".git/objects/ff/507723081e89cfc4056080f54ce33880e412ff": "e600f757b7f50ee0de00bfe734c843e1",
".git/objects/ff/a04af7377901be9034b15b88fffae5bb27d05d": "63f525c95575bed309eccd866a096c7b",
".git/refs/heads/main": "7a6c2a15c84caa9e77a25dd5eaa04700",
".git/refs/remotes/origin/main": "7a6c2a15c84caa9e77a25dd5eaa04700",
"assets/AssetManifest.bin": "eb4b50bf37351c0a9da22cc0a13dfcfb",
"assets/AssetManifest.bin.json": "85e050f03bd7d5ef7a9ed834202b1a59",
"assets/AssetManifest.json": "16f0faa82730f9861311bbea11f3de3a",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"assets/assets/icons/bloc.png": "977fbfba561065f9a68c4b47f9774531",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/dart.png": "1ab71d33e7ba834836197b4fa8726da0",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/firebase.png": "36170822afe4c716cfbdb96dac8cd10e",
"assets/assets/icons/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/images/apna%2520bazar.png": "c6f95efcd792aabe5d20970daf3065f5",
"assets/assets/images/chat%2520app.png": "1aef19898ae6583f7738d79ea861e01a",
"assets/assets/images/daraz%2520clone..png": "8c5e90c9d69b10c3e97e0e66e5b27784",
"assets/assets/images/dashboard.png": "22ee1cfce4601e83e8a344169b709111",
"assets/assets/images/hacker.png": "dc1bcece73dedab8467fc1a6e272ec35",
"assets/assets/images/my%2520admin%2520pannel.png": "e0182a3197d63dcf263db4b85a71fe25",
"assets/assets/images/Pets%2520Market.png": "db27e68ded27e787cfaa04200994c786",
"assets/assets/images/profile.jpg": "2a476d1f708d1aaaf1ac522bec5efb7e",
"assets/assets/images/profile_img.jpg": "55d6bdcf8c95c10c951936e4e808b173",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "7e8d2f3f03b55fdff7a207bf867a7261",
"assets/NOTICES": "1cd79ce768407f4e54dcf3726da812d7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "088d57bc5172ba21afd70fcd83429955",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "eeefad5512dfbffba365ff0cde4d6e6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9d4cfa1d1aa29faeb5a5c2455991911d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "64af69af5039137edce15bc524eb0f44",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "51f48a27c6390e48457813f2304dcf23",
"/": "51f48a27c6390e48457813f2304dcf23",
"main.dart.js": "97427e55f1d2d62336e187b91f6e9afb",
"manifest.json": "4d2a074e955647542596586cbde41715",
"version.json": "c420e205d8eac4ccea99913b4a50bfa7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
