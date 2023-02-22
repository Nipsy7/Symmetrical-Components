package com.example.symmetricalcomponents

import android.graphics.Color
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import com.jjoe64.graphview.GraphView
import com.jjoe64.graphview.Viewport
import com.jjoe64.graphview.helper.StaticLabelsFormatter
import com.jjoe64.graphview.series.DataPoint
import com.jjoe64.graphview.series.LineGraphSeries

class MainActivity : AppCompatActivity() {
    private lateinit var series: LineGraphSeries<DataPoint>
    private lateinit var graph: GraphView
    private lateinit var viewport: Viewport
    private lateinit var button: Button
    private val x = mutableListOf(0.0, 10.0, 20.0, 30.0, 40.0, 50.0, 60.0, 70.0, 80.0, 90.0, 100.0)
    private val y = mutableListOf(0.0, 10.0, 20.0, 30.0, 40.0, 50.0, 60.0, 70.0, 80.0, 90.0, 100.0)

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        button = findViewById(R.id.resetButton)
        graph = findViewById(R.id.graph)
        series = LineGraphSeries()
        series.isDrawDataPoints = true
        series.color = Color.RED
        graph.addSeries(series)

        button.setOnClickListener {
            // Resets the series to clear previous graph
            series.resetData(arrayOf(DataPoint(0.0, 0.0)))
            makeGraph()
        }
        makeGraph()
    }

    private fun makeGraph() {
        // Give x and y axes their range
        viewport = graph.viewport
        graph.gridLabelRenderer.setHumanRounding(false)
        viewport.isYAxisBoundsManual = true
        viewport.isXAxisBoundsManual = true
        viewport.setMinX(0.0)
        viewport.setMaxX(100.0)
        viewport.setMinY(0.0)
        viewport.setMaxY(100.0)
        /*viewport.isScrollable = true
        viewport.setScrollableY(true)*/

        val staticLabelsFormatter = StaticLabelsFormatter(graph)
        staticLabelsFormatter.setHorizontalLabels(
            arrayOf(
                "0",
                "10",
                "20",
                "30",
                "40",
                "50",
                "60",
                "70",
                "80",
                "90",
                "100"
            )
        )
        staticLabelsFormatter.setVerticalLabels(
            arrayOf(
                "0",
                "10",
                "20",
                "30",
                "40",
                "50",
                "60",
                "70",
                "80",
                "90",
                "100"
            )
        )


        for (i in 0 until x.size) {
            series.appendData(
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