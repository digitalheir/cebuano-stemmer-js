package ph.bohol.dictionaryapp;

import java.io.IOException;
import java.io.InputStream;
import java.io.StringWriter;
import java.io.Writer;
import java.util.Iterator;
import java.util.LinkedList;

import javax.xml.transform.Source;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerConfigurationException;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.TransformerFactoryConfigurationError;
import javax.xml.transform.stream.StreamResult;
import javax.xml.transform.stream.StreamSource;

import ph.bohol.util.stemmer.Derivation;
import ph.bohol.util.stemmer.Stemmer;
import ph.bohol.util.stemmer.StemmerParser;
import android.os.Bundle;
import android.app.Activity;
import android.content.Intent;
import android.view.Menu;
import android.view.MenuItem;
import android.webkit.WebView;
import android.widget.TextView;
import android.support.v4.app.NavUtils;

public class SearchResultsActivity extends Activity
{
	private DictionaryDatabase database;
	
	@Override
	protected void onCreate(Bundle savedInstanceState)
	{
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_search_results);
		
		// Show the Up button in the action bar.
		setupActionBar();
		
		Intent intent = getIntent();
		String searchWord = intent.getStringExtra(MainActivity.SEARCH_WORD);
		
	    // showDerivations(searchWord);
	    	       
        showTransform();
	}


	private void showTransform()
	{
		try 
        {
            Source xsltSource = new StreamSource(getAssets().open("xslt/WCED-view.xsl"));
            Source xmlSource = new StreamSource(getAssets().open("xml/andu.xml"));

            TransformerFactory factory = TransformerFactory.newInstance();
            Transformer transform = factory.newTransformer(xsltSource);
            Writer stringWriter = new StringWriter();
            
            StreamResult streamResult = new StreamResult(stringWriter);           
            transform.transform(xmlSource, streamResult);

            String resultString = stringWriter.toString();
            
            WebView webView = (WebView) this.findViewById(R.id.webViewEntry);
            
            if (webView != null)
            {
	            //WebView webView = new WebView(this);
	            webView.loadDataWithBaseURL("", resultString, "text/html", "UTF-8", "");
            }
            
        } 
        catch (TransformerConfigurationException e) 
        {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } 
        catch (TransformerFactoryConfigurationError e) 
        {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } 
        catch (TransformerException e) 
        {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
		catch (IOException e)
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}


	private void showDerivations(String searchWord)
	{
		// Create the text view
	    TextView textView = new TextView(this);
	    textView.setTextSize(40);
	    textView.setText(searchWord);

	    // Set the text view as the activity layout
	    setContentView(textView);
	    
	    InputStream stream = null;
		try
		{
			stream = getAssets().open("xml/stemmerCebuano.xml");
		}
		catch (IOException e)
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	    
	    // Find potential derivations of the word:
		StemmerParser parser = new StemmerParser();
	    Stemmer stemmer = parser.parse(stream);
	    
	    LinkedList<Derivation> derivations = stemmer.findDerivations(searchWord);
	    
	    database = new DictionaryDatabase(this);
	    
	    String result = "";
		Iterator<Derivation> iterator = derivations.iterator();	
		while (iterator.hasNext()) 
		{
			Derivation derivation = iterator.next();
			result += "Potential derivation: " + derivation.toString() + "\n";
			if (database.isRoot(derivation.getRoot()))
			{
				result += "ROOT!";
			}
		}
	    
	    TextView textViewResults = new TextView(this);
	    textViewResults.setTextSize(16);
	    textViewResults.setText(result);
	    
	    // Set the text view as the activity layout
	    setContentView(textViewResults);
	}

	
	/**
	 * Set up the {@link android.app.ActionBar}.
	 */
	private void setupActionBar()
	{

		getActionBar().setDisplayHomeAsUpEnabled(true);

	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu)
	{
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.search_results, menu);
		return true;
	}

	@Override
	public boolean onOptionsItemSelected(MenuItem item)
	{
		switch (item.getItemId())
		{
		case android.R.id.home:
			// This ID represents the Home or Up button. In the case of this
			// activity, the Up button is shown. Use NavUtils to allow users
			// to navigate up one level in the application structure. For
			// more details, see the Navigation pattern on Android Design:
			//
			// http://developer.android.com/design/patterns/navigation.html#up-vs-back
			//
			NavUtils.navigateUpFromSameTask(this);
			return true;
		}
		return super.onOptionsItemSelected(item);
	}
	
	@Override
	protected void onDestroy() 
	{
		super.onDestroy();
		if (database != null)
		{
			database.close();
		}
	}
	
}
