(function() {var implementors = {};
implementors["tokio_serde"] = [{text:"impl&lt;T, U, S&gt; <a class=\"trait\" href=\"https://docs.rs/futures-core/0.3.0/futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_serde/struct.FramedRead.html\" title=\"struct tokio_serde::FramedRead\">FramedRead</a>&lt;T, U, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/futures-core/0.3.0/futures_core/stream/trait.TryStream.html\" title=\"trait futures_core::stream::TryStream\">TryStream</a>&lt;Ok = <a class=\"struct\" href=\"https://docs.rs/bytes/0.5.0/bytes/bytes_mut/struct.BytesMut.html\" title=\"struct bytes::bytes_mut::BytesMut\">BytesMut</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"type\" href=\"https://docs.rs/futures-core/0.3.0/futures_core/stream/trait.TryStream.html#associatedtype.Error\" title=\"type futures_core::stream::TryStream::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;S::<a class=\"type\" href=\"tokio_serde/trait.Deserializer.html#associatedtype.Error\" title=\"type tokio_serde::Deserializer::Error\">Error</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://docs.rs/bytes/0.5.0/bytes/bytes_mut/struct.BytesMut.html\" title=\"struct bytes::bytes_mut::BytesMut\">BytesMut</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T::<a class=\"type\" href=\"https://docs.rs/futures-core/0.3.0/futures_core/stream/trait.TryStream.html#associatedtype.Ok\" title=\"type futures_core::stream::TryStream::Ok\">Ok</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"tokio_serde/trait.Deserializer.html\" title=\"trait tokio_serde::Deserializer\">Deserializer</a>&lt;U&gt;,&nbsp;</span>",synthetic:false,types:["tokio_serde::FramedRead"]},{text:"impl&lt;T, U, S&gt; <a class=\"trait\" href=\"https://docs.rs/futures-core/0.3.0/futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_serde/struct.FramedWrite.html\" title=\"struct tokio_serde::FramedWrite\">FramedWrite</a>&lt;T, U, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/futures-core/0.3.0/futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>,&nbsp;</span>",synthetic:false,types:["tokio_serde::FramedWrite"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()