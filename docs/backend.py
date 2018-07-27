#!/usr/bin/env python

import webapp2
from google.appengine.api import users

import time

class Backend(webapp2.RequestHandler):
	def get(self):
		self.response.headers['Content-Type'] = 'text/html'
		self.response.write('<pre>%s</pre><hr><p>' % time.localtime())
		user = users.get_current_user()
		if not user:
			resp = '\n\nPlease <a href="%s">autorize</a> ' % users.create_login_url("/")
		else:
			resp = '\n\nHello %s <a href="%s">logout</a>' % ( user.nickname() , users.create_login_url("/") )
		self.response.write(resp)
		
app = webapp2.WSGIApplication([
    ('/', Backend),
], debug=True)
