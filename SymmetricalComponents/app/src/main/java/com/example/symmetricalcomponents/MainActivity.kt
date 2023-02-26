package com.example.symmetricalcomponents

import android.annotation.SuppressLint
import android.graphics.Color
import android.os.Bundle
import android.view.MotionEvent
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity
import com.jjoe64.graphview.GraphView
import com.jjoe64.graphview.Viewport
import com.jjoe64.graphview.helper.StaticLabelsFormatter
import com.jjoe64.graphview.series.DataPoint
import com.jjoe64.graphview.series.OnDataPointTapListener
import com.jjoe64.graphview.series.LineGraphSeries as LineGraphSeries1


class MainActivity : AppCompatActivity() {
    private lateinit var series1: LineGraphSeries1<DataPoint>
    private lateinit var series2: LineGraphSeries1<DataPoint>
    private lateinit var graph: GraphView
    private lateinit var viewport: Viewport
    private lateinit var button: Button
    private val x = mutableListOf(-100.0, -90.0, -80.0, -70.0, -60.0, -50.0, -40.0, -30.0, -20.0, -10.0, 0.0, 10.0, 20.0, 30.0, 40.0, 50.0, 60.0, 70.0, 80.0, 90.0, 100.0)
    private val y = mutableListOf(-100.0, -90.0, -80.0, -70.0, -60.0, -50.0, -40.0, -30.0, -20.0, -10.0, 0.0, 10.0, 20.0, 30.0, 40.0, 50.0, 60.0, 70.0, 80.0, 90.0, 100.0)

    private lateinit var previousGraphPoint: DataPoint

    private var previousX: Double = 0.0
    private var previousY: Double = 0.0

    @SuppressLint("ClickableViewAccessibility")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        button = findViewById(R.id.resetButton)
        graph = findViewById(R.id.graph)

        series1 = LineGraphSeries1()
        series1.isDrawDataPoints = true
        series1.color = Color.RED

        series2 = LineGraphSeries1()
        series2.isDrawDataPoints = false
        series2.color = Color.GREEN
        series2.appendData(
            DataPoint(0.0,0.0),
            false,
            100
        )
        series2.appendData(
            DataPoint(50.0,50.0),
            false,
            100
        )

        previousGraphPoint = DataPoint(50.0,50.0)

        //graph.addSeries(series1)
        graph.addSeries(series2)

        /*var activeSeries: LineGraphSeries1<DataPoint>? = null
        series2.setOnDataPointTapListener(OnDataPointTapListener { _, _ ->
            activeSeries = series2
        })*/

        graph.setOnTouchListener { v, event ->

            val x: Float = event.x
            val y: Float = event.y

            when (event?.action) {
                MotionEvent.ACTION_MOVE -> {
                    var dx: Double = x - previousX
                    var dy: Double = y - previousY

                    dx*=0.2
                    dy*=0.2

                    val values = arrayOf(DataPoint(0.0,0.0), DataPoint(previousGraphPoint.x + dx, previousGraphPoint.y - dy))
                    previousGraphPoint = DataPoint(previousGraphPoint.x + dx, previousGraphPoint.y - dy)

                    if (values[0].x > values[1].x) {
                        series2.resetData(arrayOf(values[1], values[0]))
                    }
                    else {
                        series2.resetData(arrayOf(values[0], values[1]))
                    }
                }
            }
            previousX = x.toDouble()
            previousY = y.toDouble()
            v?.onTouchEvent(event) ?: true
        }

        button.setOnClickListener {
            // Resets the series to clear previous graph
            series1.resetData(arrayOf(DataPoint(viewport.getMinX(true), viewport.getMinY(true))))
            makeGraph(false)
        }
        makeGraph(true)
    }



    /*override fun onTouchEvent(event: MotionEvent): Boolean {
        val x: Float = event.x
        val y: Float = event.y

        when (event.action) {
            MotionEvent.ACTION_MOVE -> {

                var dx: Double = x - previousX
                var dy: Double = y - previousY

                val values = arrayOf(DataPoint(0.0,0.0), DataPoint(previousGraphPoint.x + dx, previousGraphPoint.y - dy))
                previousGraphPoint = DataPoint(previousGraphPoint.x + dx, previousGraphPoint.y - dy)

                if (values[0].x > values[1].x) {
                    series2.resetData(arrayOf(values[1], values[0]))
                }
                else {
                    series2.resetData(arrayOf(values[0], values[1]))
                }

            }
        }

        previousX = x.toDouble()
        previousY = y.toDouble()
        return true
    }*/

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

}