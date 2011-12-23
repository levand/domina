(ns domina.test
  (:use [clojure.test])
  (:import java.net.URL
           java.util.concurrent.TimeUnit
           org.openqa.selenium.WebDriver
           org.openqa.selenium.Capabilities
           org.openqa.selenium.Platform
           org.openqa.selenium.remote.DesiredCapabilities
           org.openqa.selenium.remote.RemoteWebDriver))

(def token (System/getenv "SAUCELABS_TOKEN"))

(defn get-browser-caps [name]
  (eval `(. DesiredCapabilities ~(symbol name))))

(defn get-platform [name]
  (eval `(. Platform ~(symbol (clojure.core/name name)))))

(defn selenium-test [capabilities f]
  (let [caps (get-browser-caps (:browser capabilities))]
    (doseq [[k v] (dissoc capabilities :browser)] (.setCapability caps (name k) (name v)))
    (let [driver (RemoteWebDriver.
                  (URL. (str "http://levand:" token "@ondemand.saucelabs.com:80/wd/hub"))
                  caps)]
      (-> driver .manage .timeouts (.implicitlyWait 15 TimeUnit/SECONDS))
      (f driver)
      (.quit driver))))


(def urls ["http://lukevanderhart.com/domina/test_no_opt.html"
           "http://lukevanderhart.com/domina/test_whitespace.html"
           "http://lukevanderhart.com/domina/test_simple.html"
           "http://lukevanderhart.com/domina/test_advanced.html"])

(defn do-domina-test [cfg]
  (selenium-test cfg
                 (fn [driver]
                   (doseq [url urls]
                     (.get driver url)
                     (is (= "0" (.getText (.findElementById driver "total-failures"))))))))

(deftest firefox-3-xp
  (do-domina-test {:browser "firefox"
                   :version "3"
                   :platform :XP
                   :name "firefox_3_XP"}))

(deftest firefox-7-xp
  (do-domina-test {:browser "firefox"
                   :version "7"
                   :platform :XP
                   :name "firefox_7_XP"}))

(deftest firefox-7-linux
  (do-domina-test {:browser "firefox"
                   :version "7"
                   :platform :LINUX
                   :name "firefox_7_linux"}))

(deftest chrome-linux
  (do-domina-test {:browser "chrome"
                   :platform :LINUX
                   :name "chrome_linux"}))

(deftest chrome-xp
  (do-domina-test {:browser "chrome"
                   :platform :XP
                   :name "chrome_xp"}))

(deftest ie-9-vista
  (do-domina-test {:browser "internetExplorer"
                   :version "9"
                   :platform :VISTA
                   :name "ie-9-vista"}))

(deftest ie-6-xp
  (do-domina-test {:browser "internetExplorer"
                   :version "6"
                   :platform :XP
                   :name "ie-6-xp"}))

(run-tests)