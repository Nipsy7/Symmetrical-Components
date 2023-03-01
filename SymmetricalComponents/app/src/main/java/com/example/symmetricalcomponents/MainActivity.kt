package com.example.symmetricalcomponents

import android.annotation.SuppressLint
import android.graphics.Color
import android.os.Bundle
import android.util.Log
import android.view.MotionEvent
import android.widget.Button
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.jjoe64.graphview.GraphView
import com.jjoe64.graphview.Viewport
import com.jjoe64.graphview.helper.StaticLabelsFormatter
import com.jjoe64.graphview.series.DataPoint
import kotlin.math.pow
import kotlin.math.sqrt
import com.jjoe64.graphview.series.LineGraphSeries as LineGraphSeries1


class MainActivity : AppCompatActivity() {
    private lateinit var series1: LineGraphSeries1<DataPoint>
    private lateinit var phaseOneSeries: LineGraphSeries1<DataPoint>
    private lateinit var phaseTwoSeries: LineGraphSeries1<DataPoint>
    private lateinit var phaseThreeSeries: LineGraphSeries1<DataPoint>
    private lateinit var vGraph: GraphView
    private lateinit var viewport: Viewport
    private lateinit var vButton: Button
    private var x = mutableListOf(-100.0, -90.0, -80.0, -70.0, -60.0, -50.0, -40.0, -30.0, -20.0, -10.0, 0.0, 10.0, 20.0, 30.0, 40.0, 50.0, 60.0, 70.0, 80.0, 90.0, 100.0)
    private var y = mutableListOf(-100.0, -90.0, -80.0, -70.0, -60.0, -50.0, -40.0, -30.0, -20.0, -10.0, 0.0, 10.0, 20.0, 30.0, 40.0, 50.0, 60.0, 70.0, 80.0, 90.0, 100.0)

    private lateinit var previousGraphPointPhaseOne: DataPoint
    private lateinit var previousGraphPointPhaseTwo: DataPoint
    private lateinit var previousGraphPointPhaseThree: DataPoint

    private var previousX: Double = 0.0
    private var previousY: Double = 0.0

    private var graphViewLocation = Pair(0f, 0f)

    @SuppressLint("ClickableViewAccessibility")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        //Get Views
        vButton = findViewById(R.id.resetButton)
        vGraph = findViewById(R.id.graph)

        //Setup example line graph series
        series1 = LineGraphSeries1()
        series1.isDrawDataPoints = true
        series1.color = Color.RED

        //Define starting locations for phase series
        previousGraphPointPhaseOne = DataPoint(50.0,50.0)
        previousGraphPointPhaseTwo = DataPoint(-50.0,10.0)
        previousGraphPointPhaseThree = DataPoint(10.0,0.0)

        //Create phase series
        phaseOneSeries = LineGraphSeries1()
        setupSeries(phaseOneSeries, true, Color.GREEN, DataPoint(0.0, 0.0), previousGraphPointPhaseOne)
        phaseTwoSeries = LineGraphSeries1()
        setupSeries(phaseTwoSeries, true, Color.BLUE, DataPoint(0.0, 0.0), previousGraphPointPhaseTwo)
        phaseThreeSeries = LineGraphSeries1()
        setupSeries(phaseThreeSeries, true, Color.RED, DataPoint(0.0,0.0), previousGraphPointPhaseThree)

        //Add series to graph view
        //graph.addSeries(series1)
        vGraph.addSeries(phaseOneSeries)
        vGraph.addSeries(phaseTwoSeries)
        vGraph.addSeries(phaseThreeSeries)

        //Variables to keep track of phase series selected by user
        val phaseSeriesArr = arrayOf(phaseOneSeries, phaseTwoSeries, phaseThreeSeries)
        val previousCoord = arrayOf(previousGraphPointPhaseOne, previousGraphPointPhaseTwo, previousGraphPointPhaseThree)
        var seriesArrIndex = 0

        //Listeners for user input on phase series
        /*phaseOneSeries.setOnDataPointTapListener { series, datapoint ->
            seriesArrIndex = 0
        }
        phaseTwoSeries.setOnDataPointTapListener { series, datapoint ->
            seriesArrIndex = 1
        }
        phaseThreeSeries.setOnDataPointTapListener { series, datapoint ->
            seriesArrIndex = 2
        }*/

        //Touch listener for graph view that updates series per user input
        vGraph.setOnTouchListener { v, event ->

            val x: Double = event.x.toDouble()
            val y: Double = event.y.toDouble()

            graphViewLocation = Pair(vGraph.x, vGraph.y)
            val phaseOneScreenPos = Pair(previousGraphPointPhaseOne.x + 100f, (previousGraphPointPhaseOne.y - 100f)*-1 + 468)
            val phaseTwoScreenPos = Pair(previousGraphPointPhaseTwo.x + 100f, (previousGraphPointPhaseTwo.y - 100f)*-1 + 468)
            val phaseThreeScreenPos = Pair(previousGraphPointPhaseThree.x + 100f, (previousGraphPointPhaseThree.y - 100f)*-1 + 468)
            val phaseScreenPosArr = arrayOf(phaseOneScreenPos, phaseTwoScreenPos, phaseThreeScreenPos)
            Log.i("pos", "positions: ${phaseScreenPosArr[0]}, ${phaseScreenPosArr[1]}, ${phaseScreenPosArr[2]}")

            var smallestDistance: Double? = null
            var i = 0
            for (a in phaseScreenPosArr) {
                val distance: Double = sqrt((a.first - x).pow(2)+(a.second - y).pow(2))
                if (smallestDistance == null || distance < smallestDistance) {
                    smallestDistance = distance
                    seriesArrIndex = i
                    i+=1
                }
                //Log.i("pos", "index: $seriesArrIndex, smolDist: $smallestDistance")
            }

            when (event?.action) {
                MotionEvent.ACTION_MOVE -> {
                    var dx: Double = x - previousX
                    var dy: Double = y - previousY

                    dx*=0.2
                    dy*=0.2

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
            makeGraph(false)
        }
        makeGraph(true)
    }

    //Define graph and viewport values
    private fun makeGraph(appStart: Boolean) {
        // Give x and y axes their range
        viewport = vGraph.viewport
        vGraph.gridLabelRenderer.setHumanRounding(false)
        viewport.isYAxisBoundsManual = true
        viewport.isXAxisBoundsManual = true
        viewport.setMinX(-100.0)
        viewport.setMaxX(100.0)
        viewport.setMinY(-100.0)
        viewport.setMaxY(100.0)
        /*viewport.isScrollable = true
        viewport.setScrollableY(true)*/

        val staticLabelsFormatter = StaticLabelsFormatter(vGraph)
        staticLabelsFormatter.setHorizontalLabels(
            arrayOf(
                "-100",
                "-80",
                "-60",
                "-40",
                "-20",
                "0",
                "20",
                "40",
                "60",
                "80",
                "100"
            )
        )
        staticLabelsFormatter.setVerticalLabels(
            arrayOf(
                "-100",
                "-80",
                "-60",
                "-40",
                "-20",
                "0",
                "20",
                "40",
                "60",
                "80",
                "100"
            )
        )

        if (appStart){
            appendSeriesData(0)
        }
        else{
            appendSeriesData(1)
        }

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