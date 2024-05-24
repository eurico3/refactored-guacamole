from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def principal():

	return render_template("linecharts.html")

@app.route('/linecharts')
def linecharts():
	return render_template("linecharts.html")

@app.route('/areacharts')
def areacharts():
	return render_template("areacharts.html")

@app.route('/columncharts')
def columncharts():
	return render_template("columncharts.html")

@app.route('/barcharts')
def barcharts():
	return render_template("barcharts.html")

@app.route('/combocharts')
def combocharts():
	return render_template("combocharts.html")

@app.route('/rangecharts')
def rangecharts():
	return render_template("rangecharts.html")

@app.route('/timelinecharts')
def timelinecharts():
	return render_template("timelinecharts.html")

@app.route('/funnelcharts')
def funnelcharts():
	return render_template("funnelcharts.html")

@app.route('/candlestickcharts')
def candlestickcharts():
	return render_template("candlestickcharts.html")

@app.route('/boxcharts')
def boxcharts():
	return render_template("boxcharts.html")

@app.route('/piecharts')
def piecharts():
	return render_template("piecharts.html")

@app.route('/radarcharts')
def radarcharts():
	return render_template("radarcharts.html")

@app.route('/polarcharts')
def polarcharts():
	return render_template("polarcharts.html")

@app.route('/radialcharts')
def radialcharts():
	return render_template("radialcharts.html")

@app.route('/bubblecharts')
def bubblecharts():
	return render_template("bubblecharts.html")

@app.route('/scattercharts')
def scattercharts():
	return render_template("scattercharts.html")

@app.route('/heatmapcharts')
def heatmapcharts():
	return render_template("heatmapcharts.html")

@app.route('/treemapcharts')
def treemapcharts():
	return render_template("treemapcharts.html")



if __name__ == '__main__':
    #app.run(debug=True)
	app.run(debug=False,port=8080,host="0.0.0.0")