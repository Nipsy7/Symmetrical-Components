package com.example.symmetricalcomponents

import android.annotation.SuppressLint
import android.graphics.Color
import android.os.Build
import android.os.Bundle
import android.util.DisplayMetrics
import android.view.MotionEvent
import android.widget.Button
import androidx.annotation.RequiresApi
import androidx.appcompat.app.AppCompatActivity
import com.jjoe64.graphview.GraphView
import com.jjoe64.graphview.GridLabelRenderer
import com.jjoe64.graphview.Viewport
import com.jjoe64.graphview.helper.StaticLabelsFormatter
import com.jjoe64.graphview.series.DataPoint
import com.jjoe64.graphview.series.LineGraphSeries as LineGraphSeries1


class MainActivity : AppCompatActivity() {
    private lateinit var series1: LineGraphSeries1<DataPoint>
    private lateinit var phaseOneSeries: LineGraphSeries1<DataPoint>
    private lateinit var phaseTwoSeries: LineGraphSeries1<DataPoint>
    private lateinit var phaseThreeSeries: LineGraphSeries1<DataPoint>
    private lateinit var vGraph: GraphView
    private lateinit var viewport: Viewport

    private lateinit var vGraphPos: GraphView
    private lateinit var viewportPos: Viewport

    private lateinit var vGraphNeg: GraphView
    private lateinit var viewportNeg: Viewport

    private lateinit var vGraphZero: GraphView
    private lateinit var viewportZero: Viewport

    private lateinit var vButton: Button
    private var x = mutableListOf(-100.0, -90.0, -80.0, -70.0, -60.0, -50.0, -40.0, -30.0, -20.0, -10.0, 0.0, 10.0, 20.0, 30.0, 40.0, 50.0, 60.0, 70.0, 80.0, 90.0, 100.0)
    private var y = mutableListOf(-100.0, -90.0, -80.0, -70.0, -60.0, -50.0, -40.0, -30.0, -20.0, -10.0, 0.0, 10.0, 20.0, 30.0, 40.0, 50.0, 60.0, 70.0, 80.0, 90.0, 100.0)

    private lateinit var previousGraphPointPhaseOne: DataPoint
    private lateinit var previousGraphPointPhaseTwo: DataPoint
    private lateinit var previousGraphPointPhaseThree: DataPoint

    private var previousX: Double = 0.0
    private var previousY: Double = 0.0

    private var graphViewLocation = Pair(0f, 0f)

    @RequiresApi(Build.VERSION_CODES.R)
    @SuppressLint("ClickableViewAccessibility")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        //Get screen width and height
        val displayMetrics = DisplayMetrics()
        //windowManager.defaultDisplay.getMetrics(displayMetrics)
        var screenWidth = displayMetrics.widthPixels
        var screenHeight = displayMetrics.heightPixels

        //Get Views
        vButton = findViewById(R.id.resetButton)
        vGraph = findViewById(R.id.graph)
        vGraphPos = findViewById(R.id.graphPositive)
        vGraphNeg = findViewById(R.id.graphNegative)
        vGraphZero = findViewById(R.id.graphZero)

        //Setup example line graph series
        series1 = LineGraphSeries1()
        series1.isDrawDataPoints = true
        series1.color = Color.RED

        //Define starting locations for phase series
        previousGraphPointPhaseOne = DataPoint(0.5,0.5)
        previousGraphPointPhaseTwo = DataPoint(-0.5,0.1)
        previousGraphPointPhaseThree = DataPoint(0.1,0.0)

        //Create phase series
        phaseOneSeries = LineGraphSeries1()
        setupSeries(phaseOneSeries, true, Color.GREEN, DataPoint(0.0, 0.0), previousGraphPointPhaseOne)
        phaseTwoSeries = LineGraphSeries1()
        setupSeries(phaseTwoSeries, true, Color.BLUE, DataPoint(0.0, 0.0), previousGraphPointPhaseTwo)
        phaseThreeSeries = LineGraphSeries1()
        setupSeries(phaseThreeSeries, true, Color.RED, DataPoint(0.0,0.0), previousGraphPointPhaseThree)

        //Add series to graph views
        //vGraph.addSeries(series1)
        vGraph.addSeries(phaseOneSeries)
        vGraph.addSeries(phaseTwoSeries)
        vGraph.addSeries(phaseThreeSeries)

        vGraphPos.addSeries(phaseOneSeries)
        vGraphPos.addSeries(phaseTwoSeries)
        vGraphPos.addSeries(phaseThreeSeries)

        vGraphNeg.addSeries(phaseOneSeries)
        vGraphNeg.addSeries(phaseTwoSeries)
        vGraphNeg.addSeries(phaseThreeSeries)

        vGraphZero.addSeries(phaseOneSeries)
        vGraphZero.addSeries(phaseTwoSeries)
        vGraphZero.addSeries(phaseThreeSeries)

        //Variables to keep track of phase series selected by user
        val phaseSeriesArr = arrayOf(phaseOneSeries, phaseTwoSeries, phaseThreeSeries)
        val previousCoord = arrayOf(previousGraphPointPhaseOne, previousGraphPointPhaseTwo, previousGraphPointPhaseThree)
        var seriesArrIndex = 0

        //Listeners for user input on phase series
        phaseOneSeries.setOnDataPointTapListener { series, datapoint ->
            /*Toast.makeText(
                applicationContext,
                "seriesOne: ${datapoint.x}, ${datapoint.y}",
                Toast.LENGTH_SHORT
            ).show()*/
            seriesArrIndex = 0
        }
        phaseTwoSeries.setOnDataPointTapListener { series, datapoint ->
            seriesArrIndex = 1
        }
        phaseThreeSeries.setOnDataPointTapListener { series, datapoint ->
            seriesArrIndex = 2
            /*Log.i("pos", "width: $screenWidth, height: $screenHeight, datapoint: $datapoint, graphwidth: ${vGraph.graphContentWidth}")
            Log.i("pos", "${(1080*(datapoint.x+100))/200}")*/
        }

        //Touch listener for graph view that updates series per user input
        vGraph.setOnTouchListener { v, event ->

            val x: Double = event.x.toDouble()
            val y: Double = event.y.toDouble()

            /*when (event?.action) {
                MotionEvent.ACTION_DOWN -> {
                    *//*val graphViewHeight = vGraph.graphContentHeight
                    val graphViewWidth = vGraph.graphContentWidth

                    val phaseOneRelVar = Pair(((previousCoord[0].x+100)/200), ((previousCoord[0].y+100)/200))
                    val phaseTwoRelVar = Pair(((previousCoord[1].x+100)/200), ((previousCoord[1].y+100)/200))
                    val phaseThreeRelVar = Pair(((previousCoord[2].x+100)/200), ((previousCoord[2].y+100)/200))

                    graphViewLocation = Pair(vGraph.x, vGraph.y)*//*

                    val phaseOneScreenPos = Pair((1080*(previousCoord[0].x+100))/200, ((952*(previousCoord[0].y+100))/200))
                    val phaseTwoScreenPos = Pair((1080*(previousCoord[1].x+100))/200, ((952*(previousCoord[1].y+100))/200))
                    val phaseThreeScreenPos = Pair((1080*(previousCoord[2].x+100))/200, ((952*(previousCoord[2].y+100))/200))
                    val phaseScreenPosArr = arrayOf(phaseOneScreenPos, phaseTwoScreenPos, phaseThreeScreenPos)

                    Log.i("pos", "phase one pos: $phaseOneScreenPos")
                    Log.i("pos", "phase two pos: $phaseTwoScreenPos")
                    Log.i("pos", "phase three pos: $phaseThreeScreenPos")

                    var smallestDistance: Double? = null
                    var i = 0
                    for (a in phaseScreenPosArr) {
                        val distance: Double = sqrt((a.first - x).pow(2)+(a.second - y).pow(2))
                        Log.i("pos", "x: $x, y: $y, dist: $distance")
                        if (smallestDistance == null || distance < smallestDistance) {
                            smallestDistance = distance
                            seriesArrIndex = i
                            i+=1
                        }
                    }
                }
            }*/

            when (event?.action) {
                MotionEvent.ACTION_MOVE -> {
                    var dx: Double = x - previousX
                    var dy: Double = y - previousY

                    dx*=0.002
                    dy*=0.002

                    val newDataPoint = DataPoint(previousCoord[seriesArrIndex].x + dx, previousCoord[seriesArrIndex].y - dy)
                    val values = orderData(DataPoint(0.0, 0.0), newDataPoint)
                    previousCoord[seriesArrIndex] = newDataPoint
                    phaseSeriesArr[seriesArrIndex].resetData(arrayOf(values[0], values[1]))
                }
            }
            previousX = x
            previousY = y
            v?.onTouchEvent(event) ?: true
        }

        //Button listener that redraws random example graph
        vButton.setOnClickListener {
            // Resets the series to clear previous graph
            series1.resetData(arrayOf(DataPoint(viewport.getMinX(true), viewport.getMinY(true))))
            makeGraph(false, viewport, vGraph)
            makeGraph(true, viewportPos, vGraphPos)
            makeGraph(true, viewportNeg, vGraphNeg)
            makeGraph(true, viewportZero, vGraphZero)
        }

        viewport = vGraph.viewport
        makeGraph(true, viewport, vGraph)
        viewportPos = vGraphPos.viewport
        makeGraph(true, viewportPos, vGraphPos)
        viewportNeg = vGraphNeg.viewport
        makeGraph(true, viewportNeg, vGraphNeg)
        viewportZero = vGraphZero.viewport
        makeGraph(true, viewportZero, vGraphZero)

        val graphs = arrayOf(vGraph, vGraphPos, vGraphNeg, vGraphZero)
        for (g in graphs) {
            if (g == vGraph) {
                setupGraph(g)
            }
            else {
                setupGraph(g, GridLabelRenderer.GridStyle.NONE, false, false)
            }
        }
    }

    private fun setupGraph(graph: GraphView,
                           graphLines: GridLabelRenderer.GridStyle = GridLabelRenderer.GridStyle.BOTH,
                           hasVerLabels: Boolean = true,
                           hasHorLabels: Boolean = true) {
        graph.gridLabelRenderer.gridStyle = graphLines
        graph.gridLabelRenderer.isVerticalLabelsVisible = hasVerLabels;
        graph.gridLabelRenderer.isHorizontalLabelsVisible = hasHorLabels;
    }

    //Define graph and viewport values
    private fun makeGraph(appStart: Boolean, viewport: Viewport, graph: GraphView) {
        // Give x and y axes their range
        //viewport = graph.viewport
        graph.gridLabelRenderer.setHumanRounding(false)
        viewport.isYAxisBoundsManual = true
        viewport.isXAxisBoundsManual = true
        viewport.setMinX(-1.0)
        viewport.setMaxX(1.0)
        viewport.setMinY(-1.0)
        viewport.setMaxY(1.0)
        viewport
        /*viewport.isScrollable = true
        viewport.setScrollableY(true)*/

        val staticLabelsFormatter = StaticLabelsFormatter(graph)
        staticLabelsFormatter.setHorizontalLabels(
            arrayOf(
                "-1",
                "-0.80",
                "-0.60",
                "-0.40",
                "-0.20",
                "0",
                "0.20",
                "0.40",
                "0.60",
                "0.80",
                "1"
            )
        )
        staticLabelsFormatter.setVerticalLabels(
            arrayOf(
                "-1",
                "-0.80",
                "-0.60",
                "-0.40",
                "-0.20",
                "0",
                "0.20",
                "0.40",
                "0.60",
                "0.80",
                "1"
            )
        )

        /*if (appStart){
            appendSeriesData(0)
        }
        else{
            appendSeriesData(1)
        }*/
    }

    //Append random values to example graph series
    private fun appendSeriesData(value: Int) {
        for (i in value until x.size) {
            series1.appendData(
                DataPoint(
                    x[i],
                    y.shuffled()[i]
                ),
                false,
                100
            )
        }
    }

    //Set variables in phase series
    private fun setupSeries(series: LineGraphSeries1<DataPoint>, drawDataPoints: Boolean, colour: Int, dataPoint1: DataPoint, dataPoint2: DataPoint) {
        series.isDrawDataPoints = drawDataPoints
        series.color = colour
        val dataPoints = orderData(dataPoint1, dataPoint2)

        series.appendData(
            dataPoints[0],
            false,
            100
        )
        series.appendData(
            dataPoints[1],
            false,
            100
        )
    }

    //Order phase series data (lowest x value must always come first)
    private fun orderData(dataPoint1: DataPoint, dataPoint2: DataPoint): Array<DataPoint> {
        if (dataPoint1.x > dataPoint2.x) {
            return arrayOf(dataPoint2, dataPoint1)
        }
        return arrayOf(dataPoint1, dataPoint2)
    }
}