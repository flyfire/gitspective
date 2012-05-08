(function() {

  Spine.Controller.include({
    view: function(name, context) {
      return Mustache.render(views[name], context);
    }
  });

  window.views = {};

  views["error"] = "<div class=\"alert alert-error span6\">\n  <a class=\"close\" data-dismiss=\"alert\" href=\"#\">x</a>\n  {{message}}\n</div>";

  views["index"] = "<form class=\"form-inline\">\n  <input type=\"text\" id=\"username-search\" class=\"input-xlarge offset3\" placeholder=\"Enter username...\">\n  <button type=\"submit\" class=\"btn btn-large\">gitspect!</button>\n</form>";

  views["show"] = "<header class=\"row\">\n  <div class=\"span1\"><img src=\"{{user.avatar_url}}\" alt=\"image of {{user.name}}\"/></div>\n  <div class=\"span5\">\n    <h1>{{user.name}} <a href=\"{{user.html_url}}\">{{user.login}}</a></h1>\n    <ul>\n      {{#user.email}}\n        <li>Email: <a href=\"mailto:{{user.email}}\">{{user.email}}</a></li>\n      {{/user.email}}\n\n      {{#user.company}}\n        <li>Company: {{user.company}}</li>\n      {{/user.company}}\n\n      {{#user.created_at}}\n        <li>Joined: {{user.created_at_string}}</li>\n      {{/user.created_at}}\n    </ul>\n  </div>\n</header>\n\n<div id=\"timeline-container\" class=\"row\">\n  <div id=\"timeline-line\">\n  </div>\n\n  <ol id=\"timeline\">\n  </ol>\n</div>";

  views["event"] = "<li><span class=\"corner\"></span>{{title}}</li>";

  views["static"] = "<header>\n  <h1><img src=\"https://secure.gravatar.com/avatar/d46a89672353a9c5258e187c8095ea40?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png\" alt=\"zmoazeni's gravatar\" /> Zach Moazeni (zmoazeni)</h1>\n  <ul>\n    <li>blog: http://collectiveidea.com</li>\n    <li>email: zach.moazeni@gmail.com</li>\n  </ul>\n</header>\n<div id=\"recent-repos\">\n  <h1>Recent Repos</h1>\n  <ol>\n    <li><a href=\"https://github.com/zmoazeni/my_styles.git\">my_styles</a> - My custom generators</li>\n    <li><a href=\"https://github.com/zmoazeni/my_styles.git\">harvested</a> - A Ruby Wrapper for the Harvest API http://www.getharvest.com/</li>\n    <li><a href=\"https://github.com/zmoazeni/my_styles.git\">karkeze</a> - Experimenting with Haskell and Full Text Search</li>\n  </ol>\n</div>\n\n<div id=\"recent-gists\">\n  <h1>Recent Gists</h1>\n  <ol>\n    <li><a href=\"\">https://api.github.com/gists/2550988</a></li>\n    <li><a href=\"\">https://api.github.com/gists/2512012</a></li>\n    <li><a href=\"\">https://api.github.com/gists/2550988</a></li>\n  </ol>\n</div>\n\n<section>\n  <div id=\"timeline-line\">\n  </div>\n\n  <ol id=\"timeline\">\n    <li style=\"height: 80px\"><span class=\"corner\"></span>foo</li>\n    <li><span class=\"corner\"></span>bar</li>\n    <li><span class=\"corner\"></span>foo asdlfj asdlfkj asdlfkj a alfkj aslfkj asf\n      ajf\n      a dflaskjdf alsdkfj aslfkj asdlfkj aslfkajs flaksjdf alskjfaslkfj aslfkj aslfkj aslfkjsa flkasjflaskjf aslkjf salkfj aslkfj aslfkjas lfkjsa lfakjs flksaj fl</li>\n    <li><span class=\"corner\"></span>bar</li>\n    <li><span class=\"corner\"></span>foo</li>\n    <li><span class=\"corner\"></span>bar</li>\n    <li><span class=\"corner\"></span>foo</li>\n    <li><span class=\"corner\"></span>bar</li>\n  </ol>\n</section>";

}).call(this);
