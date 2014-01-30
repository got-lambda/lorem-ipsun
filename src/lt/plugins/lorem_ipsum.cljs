(ns lt.plugins.lorem-ipsum
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.editor :as ed]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool])
  (:require-macros [lt.macros :refer [defui behavior]]))


(def ipsum-stuff
  "Bacon ipsum dolor sit amet flank turkey t-bone fatback,
ball tip meatball bresaola jowl salami pig. Sausage salami filet
mignon swine ground round ham frankfurter. Turkey boudin kielbasa,
tongue doner ham hock pancetta flank pork chop short ribs pastrami pig
beef short loin. Jerky kevin hamburger chicken strip steak swine rump.")

(cmd/command {:command ::insert
              :desc "Lorem Ipsum: Insert"
              :exec (fn [obj]
                      (let [ed (pool/last-active)]
                        (ed/insert-at-cursor ed ipsum-stuff)))})
