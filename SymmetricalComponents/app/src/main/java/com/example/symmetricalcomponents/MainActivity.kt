package com.example.symmetricalcomponents

import android.annotation.SuppressLint
import android.graphics.Color
import android.os.Bundle
import android.view.MotionEvent
import android.widget.Button
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.jjoe64.graphview.GraphView
import com.jjoe64.graphview.Viewport
import com.jjoe64.graphview.helper.StaticLabelsFormatter
import com.jjoe64.graphview.series.DataPoint
import com.jjoe64.graphview.series.OnDataPointTapListener
import com.jjoe64.graphview.series.LineGraphSeries as LineGraphSeries1


class MainActivity : AppCompatActivity() {
    private lateinit var series1: LineGraphSeries1<DataPoint>
    private lateinit var phaseOneSeries: LineGraphSeries1<DataPoint>
    private lateinit var phaseTwoSeries: LineGraphSeries1<DataPoint>
    private lateinit var phaseThreeSeries: LineGraphSeries1<DataPoint>
    private lateinit var graph: GraphView
    private lateinit var viewport: Viewport
    private lateinit var button: Button
    private val x = mutableListOf(-100.0, -90.0, -80.0, -70.0, -60.0, -50.0, -40.0, -30.0, -20.0, -10.0, 0.0, 10.0, 20.0, 30.0, 40.0, 50.0, 60.0, 70.0, 80.0, 90.0, 100.0)
    private val y = mutableListOf(-100.0, -90.0, -80.0, -70.0, -60.0, -50.0, -40.0, -30.0, -20.0, -10.0, 0.0, 10.0, 20.0, 30.0, 40.0, 50.0, 60.0, 70.0, 80.0, 90.0, 100.0)

    private lateinit var previousGraphPointPhaseOne: DataPoint
    private lateinit var previousGraphPointPhaseTwo: DataPoint
    private lateinit var previousGraphPointPhaseThree: DataPoint

    private var previousX: Double = 0.0
    private var previousY: Double = 0.0



    @SuppressLint("ClickableViewAccessibility")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        //Get Views
        button = findViewById(R.id.resetButton)
        graph = findViewById(R.id.graph)

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
        graph.addSeries(phaseOneSeries)
        graph.addSeries(phaseTwoSeries)
        graph.addSeries(phaseThreeSeries)

        //Variables to keep track of phase series selected by user
        val seriesArr = arrayOf(phaseOneSeries, phaseTwoSeries, phaseThreeSeries)
        val previousCoord = arrayOf(previousGraphPointPhaseOne, previousGraphPointPhaseTwo, previousGraphPointPhaseThree)
        var seriesArrIndex = 0

        //Listeners for user input on phase series
        phaseOneSeries.setOnDataPointTapListener(OnDataPointTapListener { _, _ ->
            seriesArrIndex = 0
            Toast.makeText(
                applicationContext,
                "series: PhaseOneSeries",
                Toast.LENGTH_SHORT
            ).show()
        })
        phaseTwoSeries.setOnDataPointTapListener(OnDataPointTapListener { _, _ ->
            seriesArrIndex = 1
            Toast.makeText(
                applicationContext,
                "series: PhaseTwoSeries",
                Toast.LENGTH_SHORT
            ).show()
        })
        phaseThreeSeries.setOnDataPointTapListener(OnDataPointTapListener { _, _ ->
            seriesArrIndex = 2
            Toast.makeText(
                applicationContext,
                "series: PhaseThreeSeries",
                Toast.LENGTH_SHORT
            ).show()
        })

        //Touch listener for graph view that updates series per user input
        graph.setOnTouchListener { v, event ->

            val x: Float = event.x
            val y: Float = event.y

            when (event?.action) {
                MotionEvent.ACTION_MOVE -> {
                    var dx: Double = x - previousX
                    var dy: Double = y - previousY

                    dx*=0.2
                    dy*=0.2

                    val values = orderData(DataPoint(0.0, 0.0), DataPoint(previousCoord[seriesArrIndex].x + dx, previousCoord[seriesArrIndex].y - dy))
                    previousCoord[seriesArrIndex] = DataPoint(previousCoord[seriesArrIndex].x + dx, previousCoord[seriesArrIndex].y - dy)
                    seriesArr[seriesArrIndex].resetData(arrayOf(values[0], values[1]))
                }
            }
            previousX = x.toDouble()
            previousY = y.toDouble()
            v?.onTouchEvent(event) ?: true
        }

        //Button listener that redraws random example graph
        button.setOnClickListener {
            // Resets the series to clear previous graph
            series1.resetData(arrayOf(DataPoint(viewport.getMinX(true), viewport.getMinY(true))))
            makeGraph(false)
        }
        makeGraph(true)
    }

    //Define graph and viewport values
    private fun makeGraph(appStart: Boolean) {
        // Give x and y axes their range
        viewport = graph.viewport
        graph.gridLabelRenderer.setHumanRounding(false)
        viewport.isYAxisBoundsManual = true
        viewport.isXAxisBoundsManual = true
        viewport.setMinX(-100.0)
        viewport.setMaxX(100.0)
        viewport.setMinY(-100.0)
        viewport.setMaxY(100.0)
        /*viewport.isScrollable = true
        viewport.setScrollableY(true)*/

        val staticLabelsFormatter = StaticLabelsFormatter(graph)
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