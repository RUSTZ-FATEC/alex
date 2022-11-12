from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

@app.route("/")
def index():
    teste = request.args.get('keywords')
    print(teste)
    name = ['Hello', 'World', 'HelpMe']
    return render_template('index.html')

# @app.route('/ajaxDolar', methods=['GET'])
# def execDolar():
#     akaka = "Alibaba"
#     return jsonify('', render_template('index.html', x=akaka))
#     # return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)