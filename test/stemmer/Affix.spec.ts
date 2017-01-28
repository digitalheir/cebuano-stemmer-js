import {expect} from "chai";
import AffixPattern from "../../src/stemmer/AffixPattern";
import {Affix, compile, applies, toXml} from "../../src/stemmer/Affix";

describe("Affix", () => {
    const a = createTestAffix();
    it("should apply", () => {

        expect(applies("makasabot", a)).to.be.true;
        expect(applies("nakasabot", a)).to.be.false;
    });

    it("should toXml", () => {
        const test = toXml(a); //noinspection HtmlUnknownAttribute
        const expected =
            "<affix form='maka-' label='FUT.POT'>\n<pattern pattern='maka([a-z]+)' root='$1'/>\n</affix>\n";
        expect(test).to.equal(expected);
    });

    function createTestAffix(): Affix {
        const a: Affix = {
            form: "maka-",
            label: "FUT.POT",
            rootType: undefined,
            patterns: [new AffixPattern("maka([a-z]+)", "$1")],
        };

        compile(a, {});
        return a;
    }
});