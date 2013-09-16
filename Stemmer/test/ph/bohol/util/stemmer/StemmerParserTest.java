package ph.bohol.util.stemmer;

import java.io.FileInputStream;
import java.io.IOException;

import org.junit.Test;

import ph.bohol.util.stemmer.Stemmer;
import ph.bohol.util.stemmer.StemmerParser;

public class StemmerParserTest
{

	@Test
	public void testParse() throws IOException
	{		
		FileInputStream stream = new FileInputStream("src/ph/bohol/util/stemmer/stemmerTest.xml");
				
		StemmerParser parser = new StemmerParser();
		Stemmer stemmer = parser.parse(stream);
		stream.close();
		stemmer.print();		
	}

}