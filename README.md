<h1><img src="http://i.imgur.com/TaFqVtT.png"/><sup><sup>Website</sup></sup></h1>
<br>

[![We Use ZenHub](https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png)](https://zenhub.com) [![License: CC BY-NC 4.0](http://i.imgur.com/GShlrY0.png)](http://creativecommons.org/licenses/by-nc/4.0/)

#### Deploy!
- [Heroku](https://heroku.com/deploy?template=https://github.com/UIoT/uiot.github.io/tree/master)
- [Azure](https://azuredeploy.net/)
- [IBM Bluemix](https://bluemix.net/deploy?repository=https://github.com/UIoT/uiot.github.io)

<b>What this repository should be?</b><br>

Read Only Repository Containing the UIoT's Development Web Site

----------------------------------------------------

<b>GitHub Pages & Jekyll</b><br>

The New **UIoT** web site uses Jekyll and GitHub Pages and is continuously deployed in a Microsoft Azure WebApp.
We recommend to you access the site directly from the Micrsooft Azure WebApp (beta.uiot.org) rather than (uiot.github.io) since the Public Configurations and Links are set for the Microsoft Azure WebApp.

----------------------------------------------------

<b>Building Jekyll (Local)</b><br>

To Build the Website simply do those following commands:

<pre>
bundle install
bundle exec jekyll build
</pre>

To Run the Website locally do those commands:

<pre>
bundle install
bundle exec jekyll serve
</pre>

<b>Pre-Requisites to Build</b><br>

* Ruby
* Need be on the Repository Folder
* Need be Super User

----------------------------------------------------

<b>Building WebApp on MS Azure</b><br>

* Add a Deployment of the Repository
* Set in Application Settings `SCM_COMMAND_IDLE_TIMEOUT` to `600`
* Wait for the Kudu App builds the Repository

----------------------------------------------------

<b>Some Points.:</b><br>

* We added [JekyllAdmin](https://github.com/jekyll/jekyll-admin) into the `_config.yml` BUT it's commented. You can use locally to add new posts.
* Don't forget to comment the `#Comment on Production` sections if you're deploying it, and putting the right server base uri on `_config.yml`
* Don't forget to uncomment the `#Uncomment on Development` sections if you're running it locally. 
