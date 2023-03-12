package com.example.symmetricalcomponents

import android.annotation.SuppressLint
import android.graphics.Color
import android.os.Build
import android.os.Bundle
import android.util.DisplayMetrics
import android.view.MotionEvent
import android.widget.TextView
import androidx.annotation.RequiresApi
import androidx.appcompat.app.AppCompatActivity
import androidx.constraintlayout.widget.ConstraintSet
import com.jjoe64.graphview.GraphView
import com.jjoe64.graphview.GridLabelRenderer
import com.jjoe64.graphview.Viewport
import com.jjoe64.graphview.helper.StaticLabelsFormatter
import com.jjoe64.graphview.series.DataPoint
import java.math.BigDecimal
import java.math.RoundingMode
import kotlin.math.PI
import kotlin.math.cos
import kotlin.math.sin
import kotlin.math.sqrt
import com.jjoe64.graphview.series.LineGraphSeries as LineGraphSeries1


class MainActivity : AppCompatActivity() {
    private lateinit var phaseOneSeries: LineGraphSeries1<DataPoint>
    private lateinit var phaseTwoSeries: LineGraphSeries1<DataPoint>
    private lateinit var phaseThreeSeries: LineGraphSeries1<DataPoint>

    private lateinit var phaseOneSeriesPos: LineGraphSeries1<DataPoint>
    private lateinit var phaseTwoSeriesPos: LineGraphSeries1<DataPoint>
    private lateinit var phaseThreeSeriesPos: LineGraphSeries1<DataPoint>

    private lateinit var phaseOneSeriesNeg: LineGraphSeries1<DataPoint>
    private lateinit var phaseTwoSeriesNeg: LineGraphSeries1<DataPoint>
    private lateinit var phaseThreeSeriesNeg: LineGraphSeries1<DataPoint>

    private lateinit var zeroSeries: LineGraphSeries1<DataPoint>

    private lateinit var vGraph: GraphView
    private lateinit var viewport: Viewport

    private lateinit var vGraphPos: GraphView
    private lateinit var viewportPos: Viewport

    private lateinit var vGraphNeg: GraphView
    private lateinit var viewportNeg: Viewport

    private lateinit var vGraphZero: GraphView
    private lateinit var viewportZero: Viewport

    private lateinit var vPhaseOneText: TextView
    private lateinit var vPhaseTwoText: TextView
    private lateinit var vPhaseThreeText: TextView

    private lateinit var previousGraphPointPhaseOne: DataPoint
    private lateinit var previousGraphPointPhaseTwo: DataPoint
    private lateinit var previousGraphPointPhaseThree: DataPoint

    private lateinit var prevPointPhaseOnePos: DataPoint
    private lateinit var prevPointPhaseTwoPos: DataPoint
    private lateinit var prevPointPhaseThreePos: DataPoint

    private lateinit var prevPointPhaseOneNeg: DataPoint
    private lateinit var prevPointPhaseTwoNeg: DataPoint
    private lateinit var prevPointPhaseThreeNeg: DataPoint

    private lateinit var prevPointZero: DataPoint

    private var previousX: Double = 0.0
    private var previousY: Double = 0.0

    private var previousXPos: Double = 0.0
    private var previousYPos: Double = 0.0

    private var previousXNeg: Double = 0.0
    private var previousYNeg: Double = 0.0

    private var previousXZero: Double = 0.0
    private var previousYZero: Double = 0.0

    private var graphViewLocation = Pair(0f, 0f)

    @RequiresApi(Build.VERSION_CODES.R)
    @SuppressLint("ClickableViewAccessibility", "SetTextI18n")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        //Get screen width and height
        val displayMetrics = DisplayMetrics()
        //windowManager.defaultDisplay.getMetrics(displayMetrics)
        var screenWidth = displayMetrics.widthPixels
        var screenHeight = displayMetrics.heightPixels

        //Get Views
        vGraph = findViewById(R.id.graph)
        vGraphPos = findViewById(R.id.graphPositive)
        vGraphNeg = findViewById(R.id.graphNegative)
        vGraphZero = findViewById(R.id.graphZero)
        vPhaseOneText = findViewById(R.id.phaseOneText)
        vPhaseTwoText = findViewById(R.id.phaseTwoText)
        vPhaseThreeText = findViewById(R.id.phaseThreeText)

        //Define starting locations for phase series
        previousGraphPointPhaseOne = DataPoint(0.5,0.5)
        previousGraphPointPhaseTwo = DataPoint(-0.5,0.1)
        previousGraphPointPhaseThree = DataPoint(0.5,0.0)
        prevPointPhaseOnePos = DataPoint(0.0, 1.0)
        prevPointPhaseTwoPos = DataPoint(-sqrt(3.0)/2, -0.5)
        prevPointPhaseThreePos = DataPoint(sqrt(3.0)/2, -0.5)
        prevPointPhaseOneNeg = DataPoint(0.0, 1.0)
        prevPointPhaseTwoNeg = DataPoint(sqrt(3.0)/2, -0.5)
        prevPointPhaseThreeNeg = DataPoint(-sqrt(3.0)/2, -0.5)
        prevPointZero = DataPoint(0.5, 0.0)

        //Initialise text views
        vPhaseOneText.text = "A = ${previousGraphPointPhaseOne.x} + ${previousGraphPointPhaseOne.y}"
        vPhaseTwoText.text = "A = ${previousGraphPointPhaseTwo.x} + ${previousGraphPointPhaseTwo.y}"
        vPhaseThreeText.text = "A = ${previousGraphPointPhaseThree.x} + ${previousGraphPointPhaseThree.y}"

        //Create phase series
        phaseOneSeries = LineGraphSeries1()
        phaseTwoSeries = LineGraphSeries1()
        phaseThreeSeries = LineGraphSeries1()
        setupSeries(phaseOneSeries, true, Color.GREEN, DataPoint(0.0, 0.0), previousGraphPointPhaseOne)
        setupSeries(phaseTwoSeries, true, Color.BLUE, DataPoint(0.0, 0.0), previousGraphPointPhaseTwo)
        setupSeries(phaseThreeSeries, true, Color.RED, DataPoint(0.0,0.0), previousGraphPointPhaseThree)

        phaseOneSeriesPos = LineGraphSeries1()
        phaseTwoSeriesPos = LineGraphSeries1()
        phaseThreeSeriesPos = LineGraphSeries1()
        setupSeries(phaseOneSeriesPos, true, Color.GREEN, DataPoint(0.0, 0.0), prevPointPhaseOnePos)
        setupSeries(phaseTwoSeriesPos, true, Color.BLUE, DataPoint(0.0, 0.0), prevPointPhaseTwoPos)
        setupSeries(phaseThreeSeriesPos, true, Color.RED, DataPoint(0.0, 0.0), prevPointPhaseThreePos)

        phaseOneSeriesNeg = LineGraphSeries1()
        phaseTwoSeriesNeg = LineGraphSeries1()
        phaseThreeSeriesNeg = LineGraphSeries1()
        setupSeries(phaseOneSeriesNeg, true, Color.GREEN, DataPoint(0.0, 0.0), prevPointPhaseOneNeg)
        setupSeries(phaseTwoSeriesNeg, true, Color.BLUE, DataPoint(0.0, 0.0), prevPointPhaseTwoNeg)
        setupSeries(phaseThreeSeriesNeg, true, Color.RED, DataPoint(0.0, 0.0), prevPointPhaseThreeNeg)

        zeroSeries = LineGraphSeries1()
        setupSeries(zeroSeries, true, Color.BLACK, DataPoint(0.0, 0.0), prevPointZero)

        //Add series to graph views
        vGraph.addSeries(phaseOneSeries)
        vGraph.addSeries(phaseTwoSeries)
        vGraph.addSeries(phaseThreeSeries)

        vGraphPos.addSeries(phaseOneSeriesPos)
        vGraphPos.addSeries(phaseTwoSeriesPos)
        vGraphPos.addSeries(phaseThreeSeriesPos)

        vGraphNeg.addSeries(phaseOneSeriesNeg)
        vGraphNeg.addSeries(phaseTwoSeriesNeg)
        vGraphNeg.addSeries(phaseThreeSeriesNeg)

        vGraphZero.addSeries(zeroSeries)

        //Variables to keep track of phase series selected by user
        val phaseSeriesArr = arrayOf(phaseOneSeries, phaseTwoSeries, phaseThreeSeries)
        val previousCoord = arrayOf(previousGraphPointPhaseOne, previousGraphPointPhaseTwo, previousGraphPointPhaseThree)
        var seriesArrIndex = 0

        //Listeners for user input on phase series
        phaseOneSeries.setOnDataPointTapListener { series, datapoint ->
            seriesArrIndex = 0
        }
        phaseTwoSeries.setOnDataPointTapListener { series, datapoint ->
            seriesArrIndex = 1
        }
        phaseThreeSeries.setOnDataPointTapListener { series, datapoint ->
            seriesArrIndex = 2
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

                    //Update text views
                    vPhaseOneText.text = "A = ${BigDecimal(previousCoord[0].x).setScale(4, RoundingMode.HALF_UP)}" +
                            " + j${BigDecimal(previousCoord[0].y).setScale(4, RoundingMode.HALF_UP)}"
                    vPhaseTwoText.text = "A = ${BigDecimal(previousCoord[1].x).setScale(4, RoundingMode.HALF_UP)}" +
                            " + j${BigDecimal(previousCoord[1].y).setScale(4, RoundingMode.HALF_UP)}"
                    vPhaseThreeText.text = "A = ${BigDecimal(previousCoord[2].x).setScale(4, RoundingMode.HALF_UP)}" +
                            " + j${BigDecimal(previousCoord[2].y).setScale(4, RoundingMode.HALF_UP)}"
                }
            }
            previousX = x
            previousY = y
            v?.onTouchEvent(event) ?: true
        }

        vGraphPos.setOnTouchListener { v, event ->
            val x: Double = event.x.toDouble()
            val y: Double = event.y.toDouble()

            when (event?.action) {
                MotionEvent.ACTION_MOVE -> {
                    var dx: Double = x - previousXPos
                    var dy: Double = y - previousYPos

                    dx*=0.008
                    dy*=0.008

                    val newDataPoint = DataPoint(prevPointPhaseOnePos.x + dx, prevPointPhaseOnePos.y - dy)
                    val values = orderData(DataPoint(0.0,0.0), newDataPoint)
                    prevPointPhaseOnePos = newDataPoint
                    phaseOneSeriesPos.resetData(arrayOf(values[0], values[1]))

                    val newDataPoint2 = getDataPointAtAngle(newDataPoint, 2* PI/3)
                    val values2 = orderData(DataPoint(0.0, 0.0), newDataPoint2)
                    phaseTwoSeriesPos.resetData(arrayOf(values2[0], values2[1]))

                    val newDataPoint3 = getDataPointAtAngle(newDataPoint, -2* PI/3)
                    val values3 = orderData(DataPoint(0.0, 0.0), newDataPoint3)
                    phaseThreeSeriesPos.resetData(arrayOf(values3[0], values3[1]))
                }
            }
            previousXPos = x
            previousYPos = y
            v?.onTouchEvent(event) ?: true
        }

        vGraphNeg.setOnTouchListener { v, event ->
            val x: Double = event.x.toDouble()
            val y: Double = event.y.toDouble()

            when (event?.action) {
                MotionEvent.ACTION_MOVE -> {
                    var dx: Double = x - previousXNeg
                    var dy: Double = y - previousYNeg

                    dx*=0.008
                    dy*=0.008

                    val newDataPoint = DataPoint(prevPointPhaseOneNeg.x + dx, prevPointPhaseOneNeg.y - dy)
                    val values = orderData(DataPoint(0.0,0.0), newDataPoint)
                    prevPointPhaseOneNeg = newDataPoint
                    phaseOneSeriesNeg.resetData(arrayOf(values[0], values[1]))

                    val newDataPoint2 = getDataPointAtAngle(newDataPoint, -2* PI/3)
                    val values2 = orderData(DataPoint(0.0, 0.0), newDataPoint2)
                    phaseTwoSeriesNeg.resetData(arrayOf(values2[0], values2[1]))

                    val newDataPoint3 = getDataPointAtAngle(newDataPoint, 2* PI/3)
                    val values3 = orderData(DataPoint(0.0, 0.0), newDataPoint3)
                    phaseThreeSeriesNeg.resetData(arrayOf(values3[0], values3[1]))
                }
            }
            previousXNeg = x
            previousYNeg = y
            v?.onTouchEvent(event) ?: true
        }

        vGraphZero.setOnTouchListener { v, event ->
            val x: Double = event.x.toDouble()
            val y: Double = event.y.toDouble()

            when (event?.action) {
                MotionEvent.ACTION_MOVE -> {
                    var dx: Double = x - previousXZero
                    var dy: Double = y - previousYZero

                    dx*=0.008
                    dy*=0.008

                    val newDataPoint = DataPoint(prevPointZero.x + dx, prevPointZero.y - dy)
                    val values = orderData(DataPoint(0.0,0.0), newDataPoint)
                    prevPointZero = newDataPoint
                    zeroSeries.resetData(arrayOf(values[0], values[1]))
                }
            }
            previousXZero = x
            previousYZero = y
            v?.onTouchEvent(event) ?: true
        }

        viewport = vGraph.viewport
        makeGraph(viewport, vGraph)
        viewportPos = vGraphPos.viewport
        makeGraph(viewportPos, vGraphPos)
        viewportNeg = vGraphNeg.viewport
        makeGraph(viewportNeg, vGraphNeg)
        viewportZero = vGraphZero.viewport
        makeGraph(viewportZero, vGraphZero)

        val graphs = arrayOf(vGraph, vGraphPos, vGraphNeg, vGraphZero)
        for (g in graphs) {
            if (g == vGraph) {
                setupGraph(g)
            }
            else {
                setupGraph(g, GridLabelRenderer.GridStyle.BOTH, false, false)
            }
        }
    }

    private fun getDataPointAtAngle(datapoint: DataPoint, angle: Double) : DataPoint {
        return DataPoint(datapoint.x*cos(angle) - datapoint.y*sin(angle), datapoint.y*cos(angle) + datapoint.x*sin(angle))
    }

    private fun setupGraph(graph: GraphView,
                           graphLines: GridLabelRenderer.GridStyle = GridLabelRenderer.GridStyle.BOTH,
                           hasVerLabels: Boolean = true,
                           hasHorLabels: Boolean = true,
                           highlightAxes: Boolean = true) {
        graph.gridLabelRenderer.gridStyle = graphLines
        graph.gridLabelRenderer.isVerticalLabelsVisible = hasVerLabels;
        graph.gridLabelRenderer.isHorizontalLabelsVisible = hasHorLabels;
        graph.gridLabelRenderer.isHighlightZeroLines = highlightAxes
    }

    //Define graph and viewport values
    private fun makeGraph(viewport: Viewport, graph: GraphView) {
        // Give x and y axes their range
        graph.gridLabelRenderer.setHumanRounding(false)
        viewport.isYAxisBoundsManual = true
        viewport.isXAxisBoundsManual = true
        viewport.setMinX(-1.0)
        viewport.setMaxX(1.0)
        viewport.setMinY(-1.0)
        viewport.setMaxY(1.0)

        val staticLabelsFormatter = StaticLabelsFormatter(graph)
        staticLabelsFormatter.setHorizontalLabels(
            arrayOf(
                "-1.0",
                "-0.8",
                "-0.6",
                "-0.4",
                "-0.2",
                "0.0",
                "0.2",
                "0.4",
                "0.6",
                "0.8",
                "1.0"
            )
        )
        staticLabelsFormatter.setVerticalLabels(
            arrayOf(
                "-1.0",
                "-0.8",
                "-0.6",
                "-0.4",
                "-0.2",
                "0.0",
                "0.2",
                "0.4",
                "0.6",
                "0.8",
                "1.0"
            )
        )
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