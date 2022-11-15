from flask import Flask, render_template, jsonify, request
import Crawler.crawlerDolar as crawDol
import Crawler.crawlerWeather as crawTemp
import Crawler.crawlerSearch as crawSearch

app = Flask(__name__, static_url_path='/static')

@app.route("/")
def index():
    return render_template('index.html')

@app.route('/ajaxDolar', methods=['GET'])
def execDolar():
    print(crawDol.findDolar())
    return jsonify({'valueDolar': crawDol.sayText})

@app.route('/ajaxWeather', methods=['GET'])
def execWeather():
    print(crawTemp.findTemp())
    return jsonify({'valueTemp': crawTemp.sayText})

@app.route('/ajaxSearch', methods=['GET'])
def execSearch():
    crawSearch.findGoogle(request.args.get('pesquisa'))
    return jsonify({'valueText': crawSearch.sayText, 'valueLink':crawSearch.sayLink})
    
if __name__ == "__main__":
    app.run(debug=True)