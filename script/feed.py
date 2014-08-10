import time;

feedjs = open('feed.js', 'a');

print 'Gimme a header:';
header = raw_input();
print 'Type your entire post:';
text = raw_input();

func = '\nappendToFeed(\''+header+' - '+time.strftime("%m/%d/%Y")+'\',\''+text+'\');';

feedjs.write(func);
feedjs.write('\n');
feedjs.close();

print 'Post successfully appended ' + time.strftime("%m/%d/%Y");
end = raw_input();
