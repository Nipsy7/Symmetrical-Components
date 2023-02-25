package com.example.symmetricalcomponents

import android.graphics.Color
import android.os.Bundle
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
    private lateinit var series2: LineGraphSeries1<DataPoint>
    private lateinit var series3: LineGraphSeries1<DataPoint>
    private lateinit var series4: LineGraphSeries1<DataPoint>
    private lateinit var graph: GraphView
    private lateinit var viewport: Viewport
    private lateinit var button: Button
    private val x = mutableListOf(-100.0, -90.0, -80.0, -70.0, -60.0, -50.0, -40.0, -30.0, -20.0, -10.0, 0.0, 10.0, 20.0, 30.0, 40.0, 50.0, 60.0, 70.0, 80.0, 90.0, 100.0)
    private val y = mutableListOf(-100.0, -90.0, -80.0, -70.0, -60.0, -50.0, -40.0, -30.0, -20.0, -10.0, 0.0, 10.0, 20.0, 30.0, 40.0, 50.0, 60.0, 70.0, 80.0, 90.0, 100.0)

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        button = findViewById(R.id.resetButton)
        graph = findViewById(R.id.graph)

        series1 = LineGraphSeries1()
        series1.isDrawDataPoints = true
        series1.color = Color.RED
        series1.setOnDataPointTapListener(OnDataPointTapListener { _, dataPoint ->
            Toast.makeText(
                applicationContext,
                "Series1: On Data Point clicked: $dataPoint",
                Toast.LENGTH_SHORT
            ).show()
        })

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

        series3 = LineGraphSeries1()
        series3.isDrawDataPoints = false
        series3.color = Color.BLUE
        series3.appendData(
            DataPoint(-50.0,-50.0),
            false,
            100
        )
        series3.appendData(
            DataPoint(0.0, 0.0),
            false,
            100
        )

        series4 = LineGraphSeries1()
        series4.isDrawDataPoints = false
        series4.color = Color.RED
        series4.appendData(
            DataPoint(-60.0,0.0),
            false,
            100
        )
        series4.appendData(
            DataPoint(0.0,0.0),
            false,
            100
        )

        graph.addSeries(series1)
        /*graph.addSeries(series2)
        graph.addSeries(series3)
        graph.addSeries(series4)*/

        button.setOnClickListener {
            // Resets the series to clear previous graph
            series1.resetData(arrayOf(DataPoint(viewport.getMinX(true), viewport.getMinY(true))))
            makeGraph(false)
        }
        makeGraph(true)
    }

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