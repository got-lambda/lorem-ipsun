if(!lt.util.load.provided_QMARK_('lt.plugins.lorem-ipsum')) {
goog.provide('lt.plugins.lorem_ipsum');
goog.require('cljs.core');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
lt.plugins.lorem_ipsum.ipsum_stuff = "Bacon ipsum dolor sit amet flank turkey t-bone fatback,\nball tip meatball bresaola jowl salami pig. Sausage salami filet\nmignon swine ground round ham frankfurter. Turkey boudin kielbasa,\ntongue doner ham hock pancetta flank pork chop short ribs pastrami pig\nbeef short loin. Jerky kevin hamburger chicken strip steak swine rump.";
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.lorem-ipsum","insert","lt.plugins.lorem-ipsum/insert",3955225283),new cljs.core.Keyword(null,"desc","desc",1016984067),"Lorem Ipsum: Insert",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (obj){var ed = lt.objs.editor.pool.last_active.call(null);return lt.objs.editor.insert_at_cursor.call(null,ed,lt.plugins.lorem_ipsum.ipsum_stuff);
})], null));
}

//# sourceMappingURL=lorem_ipsum_compiled.js.map