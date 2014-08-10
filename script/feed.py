#!/usr/bin/python

feedjs = open('feed.js', 'a');

print "Gimme a header:";
header = raw_input();
print "Type your entire post:";
text = raw_input();

func = '\nappendToChild(\''+header+'\',\''+text+'\');';

feedjs.write(func);
feedjs.write('\n');
feedjs.close();

print "Post successfully appended";
end = raw_input();
