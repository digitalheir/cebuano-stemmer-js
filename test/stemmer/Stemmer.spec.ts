import {expect} from "chai";
import {createReadStream} from "fs";
import parseStream from "../../generate-stemmer/StemmerParser";
import {Stemmer, findDerivations} from "../../src/stemmer/Stemmer";
import {Derivation, toStringDervation} from "../../src/stemmer/Derivation";
import TestRootWordProvider from "./testRootWordProvider";
import {RootWordProvider} from "../../src/stemmer/RootWordProvider";

describe("Stemmer", () => {
    it("should load", (done) => {
        parseStream(createReadStream("test/stemmerTest.xml"))
            .then((stemmer: Stemmer) => {
                expect(stemmer.compiled).to.be.true;
                let results: Derivation[] = testDerivations(undefined, stemmer, "makasabut");
                expect(results.length).to.equal(3);

                results = testDerivations(undefined, stemmer, "balaya");
                expect(results.length).to.equal(2);

                const rootWordProvider = new TestRootWordProvider();

                results = testDerivations(rootWordProvider, stemmer, "makasabut");
                expect(results.length).to.equal(1);

                results = testDerivations(rootWordProvider, stemmer, "balaya");
                expect(results.length).to.equal(1);

                done();
            })
            .catch(done);
        // System.out.print(stemmer.toStringAffix());
        //
    });

    // @Test
    // public final void testLargeLoad() throws FileNotFoundException {
    //
    //     // FIXME: Work around https://code.google.com/p/android/issues/detail?id=64887 using an absolute path.
    //     FileInputStream stream = new FileInputStream("stemmerLargeTest.xml");
    //
    //     StemmerParser parser = new StemmerParser();
    //     Stemmer stemmer = parser.parse(stream);
    //
    //     System.out.print(stemmer.toStringAffix());
    //
    //     TestRootWordProvider provider = new TestRootWordProvider();
    //     stemmer.setRootProvider(provider);
    //
    //     LinkedList<Derivation> results;
    //     results = testDerivations(stemmer, "makasabut");
    //     results = testDerivations(stemmer, "mangaun");
    //     results = testDerivations(stemmer, "balaya");
    //     results = testDerivations(stemmer, "pag-abut");
    //     results = testDerivations(stemmer, "binisaya");
    //     System.out.print("Calls to root-word provider: " + provider.getCalls());
    // }
    //
    function testDerivations(rootWordProvider: RootWordProvider, stemmer: Stemmer, word: string): Derivation[] {
        const derivations: Derivation[] = findDerivations(rootWordProvider, stemmer, word);
        for (const derivation of derivations)
            console.log("Potential derivation: " + toStringDervation(derivation));
        return derivations;
    }
});
