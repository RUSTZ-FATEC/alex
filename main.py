from flask import Flask, render_template, jsonify, request
import Crawler.crawlerDolar as crawDol
import Crawler.crawlerWeather as crawTemp

app = Flask(__name__, static_url_path='/static')

@app.route("/")
def index():
    return render_template('index.html')

@app.route('/ajaxDolar', methods=['GET'])
def execDolar():
    print(crawDol.findDolar())
    return jsonify({'valueDolar': crawDol.sayText})

@app.route('/ajax', methods=['GET'])
def execDolar():
    print(crawDol.findDolar())
    return jsonify({'valueDolar': crawDol.sayText})

if __name__ == "__main__":
    app.run(debug=True)